// Code-built hero illustration: how a Primo project comes together.
// Decorative only (aria-hidden); everything animates with CSS and respects reduced motion.

const CODE = [
  [["c", "// primo.config.ts"]],
  [["k", "export const "], ["v", "project"], ["p", " = {"]],
  [["p", "  goal: "], ["s", '"launch an MVP in 10 weeks"'], ["p", ","]],
  [["p", "  platforms: ["], ["s", '"web"'], ["p", ", "], ["s", '"ios"'], ["p", ", "], ["s", '"android"'], ["p", "],"]],
  [["p", "  ai: { features: "], ["s", '"assist"'], ["p", ", guardrails: "], ["k", "true"], ["p", " },"]],
  [["p", "  cloud: "], ["s", '"aws"'], ["p", ", ownership: "], ["s", '"100% yours"'], ["p", ","]],
  [["p", "  demos: "], ["s", '"every week"'], ["p", ","]],
  [["p", "};"]],
];

const NODES = [
  { id: "web", x: 40, y: 34, label: "Web" },
  { id: "ios", x: 40, y: 92, label: "iOS" },
  { id: "and", x: 40, y: 150, label: "Android" },
  { id: "api", x: 176, y: 92, label: "API" },
  { id: "ai", x: 300, y: 50, label: "AI" },
  { id: "db", x: 300, y: 134, label: "Data" },
];
const EDGES = [
  ["web", "api"],
  ["ios", "api"],
  ["and", "api"],
  ["api", "ai"],
  ["api", "db"],
];
const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function HeroVisual() {
  return (
    <div className="pt-hv" aria-hidden="true">
      {/* Editor */}
      <div className="pt-hv-editor">
        <div className="pt-hv-bar">
          <i />
          <i />
          <i />
          <span>primo.config.ts</span>
        </div>
        <pre className="pt-hv-code">
          {CODE.map((line, i) => (
            <span className="ln" key={i} style={{ "--l": i }}>
              <em>{i + 1}</em>
              {line.map(([t, s], j) => (
                <span key={j} className={`t-${t}`}>
                  {s}
                </span>
              ))}
              {i === CODE.length - 1 && <b className="caret" />}
            </span>
          ))}
        </pre>
      </div>

      {/* Architecture */}
      <div className="pt-hv-arch">
        <div className="pt-hv-label">Architecture</div>
        <svg viewBox="0 0 340 184" fill="none">
          {EDGES.map(([a, b], i) => {
            const A = byId[a];
            const B = byId[b];
            const d = `M${A.x + 26} ${A.y} C ${(A.x + B.x) / 2 + 13} ${A.y}, ${(A.x + B.x) / 2 + 13} ${B.y}, ${B.x - 26} ${B.y}`;
            return (
              <g key={i}>
                <path d={d} className="edge" />
                <path d={d} pathLength="100" className="flow" style={{ animationDelay: `${i * 0.45}s` }} />
              </g>
            );
          })}
          {NODES.map((n) => (
            <g key={n.id} className={`node ${n.id === "api" ? "hub" : ""} ${n.id === "ai" ? "ai" : ""}`}>
              <rect x={n.x - 26} y={n.y - 14} width="52" height="28" rx="8" />
              <text x={n.x} y={n.y + 4} textAnchor="middle">
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Deploy status */}
      <div className="pt-hv-deploy">
        <div className="pt-hv-deploy-head">
          <span className="dot" />
          <b>Deployed to production</b>
        </div>
        <ul>
          <li style={{ "--i": 0 }}>Tests passed</li>
          <li style={{ "--i": 1 }}>Security checks</li>
          <li style={{ "--i": 2 }}>Preview approved</li>
        </ul>
      </div>

      {/* Weekly demo */}
      <div className="pt-hv-sprint">
        <div className="k">Sprint 06 · Weekly demo</div>
        <div className="v">Onboarding flow, payments &amp; AI assist</div>
        <div className="bar">
          <span />
        </div>
      </div>
    </div>
  );
}
