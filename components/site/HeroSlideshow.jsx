"use client";
import { useEffect, useRef, useState } from "react";
import HeroVisual from "./HeroVisual";
import { HeroBuiltTogether, HeroBusinessGrowth, HeroIdeaToLaunch } from "./HeroOptions";

const SLIDES = [
  { label: "Idea to launch", Visual: HeroIdeaToLaunch },
  { label: "Grow online", Visual: HeroBusinessGrowth },
  { label: "Built together", Visual: HeroBuiltTogether },
  { label: "Engineered right", Visual: HeroVisual },
];
const INTERVAL = 6500;
const CANVAS_W = 560;
const CANVAS_H = 515;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  // Each time a slide becomes active it gets a new key, so its entrance
  // animations replay. The outgoing slide keeps its key and simply fades out.
  const [mounts, setMounts] = useState(() => SLIDES.map(() => 0));
  const timer = useRef(0);
  const stage = useRef(null);
  const [scale, setScale] = useState(1);

  // Slides are drawn on a fixed 560px canvas and scaled to fit, so every
  // screen size shows the same composition.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1.15, e.contentRect.width / CANVAS_W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const go = (i) => {
    if (i === active) return;
    setMounts((m) => m.map((n, j) => (j === i ? n + 1 : n)));
    setActive(i);
  };

  useEffect(() => {
    if (paused || reduced) return;
    timer.current = window.setTimeout(() => go((active + 1) % SLIDES.length), INTERVAL);
    return () => window.clearTimeout(timer.current);
  }, [active, paused, reduced]);

  return (
    <div
      className="pt-hs"
      role="region"
      aria-roledescription="carousel"
      aria-label="What building with Primo looks like"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="pt-hs-stage" ref={stage}>
        <div
          className="pt-hs-canvas"
          style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${scale})` }}
        >
        {SLIDES.map(({ label, Visual }, i) => (
          <div
            key={`${i}-${mounts[i]}`}
            className={`pt-hs-slide ${i === active ? "is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}: ${label}`}
            aria-hidden={i !== active}
          >
            <Visual />
          </div>
        ))}
        </div>
      </div>

      <div className="pt-hs-dots" role="tablist" aria-label="Choose a slide">
        {SLIDES.map(({ label }, i) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? "is-active" : ""}
            onClick={() => go(i)}
          >
            <span className="bar">
              <span
                key={`${active}-${paused}`}
                style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused || reduced ? "paused" : "running" }}
              />
            </span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
