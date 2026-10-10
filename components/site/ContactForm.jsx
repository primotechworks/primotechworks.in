"use client";
import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./Icon";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "@/data/contactOptions";

const EMPTY = { name: "", email: "", company: "", services: [], budget: "", timeline: "", message: "", website: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const toggleService = (s) =>
    setForm({
      ...form,
      services: form.services.includes(s) ? form.services.filter((x) => x !== s) : [...form.services, s],
    });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Network error. Please try again or email us directly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="pt-sent" role="status">
        <div className="pt-sent-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m4.5 12.5 5 5 10-11" />
          </svg>
        </div>
        <h2 className="pt-h3">Thanks, we&apos;ve got your message</h2>
        <p>
          We&apos;ll reply within one business day, usually much sooner, with next steps and a few
          times for a quick call.
        </p>
        <button type="button" className="pt-btn pt-btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="pt-form" onSubmit={onSubmit} noValidate={false}>
      {/* Honeypot: hidden from people; bots tend to fill it */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      <div className="row2">
        <div className="pt-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={set("name")} />
        </div>
        <div className="pt-field">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required maxLength={100} autoComplete="email" value={form.email} onChange={set("email")} />
        </div>
      </div>

      <div className="pt-field">
        <label htmlFor="company">
          Company <span>(optional)</span>
        </label>
        <input id="company" name="company" maxLength={120} autoComplete="organization" value={form.company} onChange={set("company")} />
      </div>

      <fieldset className="pt-field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ fontSize: 13.5, fontWeight: 600, color: "var(--pt-ink)", marginBottom: 10 }}>
          What can we help with?
        </legend>
        <div className="pt-chips">
          {SERVICE_OPTIONS.map((s, i) => (
            <span key={s}>
              <input type="checkbox" id={`svc-${i}`} checked={form.services.includes(s)} onChange={() => toggleService(s)} />
              <label htmlFor={`svc-${i}`}>{s}</label>
            </span>
          ))}
        </div>
      </fieldset>

      <div className="row2">
        <div className="pt-field">
          <label htmlFor="budget">
            Estimated budget <span>(USD)</span>
          </label>
          <select id="budget" name="budget" value={form.budget} onChange={set("budget")}>
            <option value="">Select a range</option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="pt-field">
          <label htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={set("timeline")}>
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-field">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder="What are you building, who is it for, and what does success look like?"
          value={form.message}
          onChange={set("message")}
        />
      </div>

      {status === "error" && (
        <div className="pt-alert err" role="alert">
          {error}
        </div>
      )}

      <button type="submit" className="pt-btn pt-btn-brand" disabled={status === "sending"} style={{ width: "100%", height: 56 }}>
        {status === "sending" ? "Sending…" : (
          <>
            Send message <Arrow size={16} />
          </>
        )}
      </button>
      <p className="pt-form-note">
        By sending this form you agree to our <Link href="/privacypolicy">Privacy Policy</Link> and{" "}
        <Link href="/termsandconditions">Terms</Link>. We never share your details.
      </p>
    </form>
  );
}
