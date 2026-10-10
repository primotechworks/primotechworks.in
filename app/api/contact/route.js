import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "@/data/contactOptions";

const LIMITS = { name: 100, email: 100, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes.
// Resets on server restart / per serverless instance, which is fine as a basic guard.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim().slice(0, 120);
    // Only accept known option values for the structured fields.
    const services = (Array.isArray(body.services) ? body.services : []).filter((s) => SERVICE_OPTIONS.includes(s));
    const budget = BUDGET_OPTIONS.includes(body.budget) ? body.budget : "";
    const timeline = TIMELINE_OPTIONS.includes(body.timeline) ? body.timeline : "";

    // Honeypot: real users never fill this hidden field. Pretend success for bots.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please add your name, email and a short message." }, { status: 400 });
    }
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      message.length > LIMITS.message ||
      !EMAIL_RE.test(email)
    ) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.EMAIL_TO || user;

    if (!host || !user || !pass) {
      console.error("Contact form: SMTP environment variables are not set");
      return NextResponse.json(
        { error: "Message could not be sent. Please email us directly." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user, pass },
    });

    const details = [
      ["Name", name],
      ["Email", email],
      ["Company", company || "-"],
      ["Services", services.join(", ") || "-"],
      ["Budget", budget || "-"],
      ["Timeline", timeline || "-"],
    ];

    // Send from our own authenticated mailbox; the visitor goes in Reply-To.
    await transporter.sendMail({
      from: `"Primo Techworks Website" <${user}>`,
      replyTo: { name, address: email },
      to,
      subject: `New enquiry: ${name.replace(/[\r\n]+/g, " ")}${company ? ` (${company.replace(/[\r\n]+/g, " ")})` : ""}`,
      text: details.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}`,
      html:
        details.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`).join("") +
        `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Message could not be sent. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
