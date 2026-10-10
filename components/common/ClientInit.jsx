"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Browser-only behaviour: scroll reveals and number counters.
// Kept out of the root layout so the layout can stay a server component.
export default function ClientInit() {
  const path = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const pending = () => document.querySelectorAll("[data-reveal]:not(.is-in)");
    pending().forEach((el) => reveal.observe(el));

    // Safety net: fast scrolling can skip an observer callback, so anything already
    // scrolled into or past the viewport is always revealed.
    let timer = 0;
    const sweep = () => {
      timer = 0;
      const limit = window.innerHeight * 0.95;
      pending().forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-in");
          reveal.unobserve(el);
        }
      });
    };
    // Throttled with a timer rather than requestAnimationFrame, which browsers
    // may skip during very fast scrolling.
    const onScroll = () => {
      if (!timer) timer = window.setTimeout(sweep, 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    sweep();

    const count = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          count.unobserve(e.target);
          const el = e.target;
          const target = Number(el.dataset.count);
          if (reduce || !target) return;
          const start = performance.now();
          const dur = 1400;
          const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => count.observe(el));

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reveal.disconnect();
      count.disconnect();
    };
  }, [path]);

  return null;
}
