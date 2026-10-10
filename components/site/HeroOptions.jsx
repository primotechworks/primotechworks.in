import Icon from "./Icon";

/* Option A — From idea to launch ------------------------------------------ */
export function HeroIdeaToLaunch() {
  return (
    <div className="ho ho-a" aria-hidden="true">
      <svg className="ho-path" viewBox="0 0 520 460" fill="none">
        <path d="M120 120 C 200 120, 190 230, 260 230 S 360 340, 420 360" />
      </svg>

      <div className="ho-note">
        <div className="ho-note-k">
          <Icon name="spark" size={16} /> Your idea
        </div>
        <p>&ldquo;A simple app so our customers can book and pay online.&rdquo;</p>
      </div>

      <div className="ho-phone">
        <div className="ho-phone-screen">
          <div className="ho-app-top">
            <span className="ho-app-logo">B</span>
            <b>Bloom Studio</b>
          </div>
          <div className="ho-app-title">Book your next visit</div>
          <div className="ho-days">
            {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
              <span key={d} className={i === 1 ? "on" : ""}>
                {d}
                <b>{12 + i}</b>
              </span>
            ))}
          </div>
          <div className="ho-slots">
            {["10:00", "11:30", "1:00", "3:30", "5:00", "6:30"].map((t, i) => (
              <span key={t} className={i === 1 ? "on" : ""}>
                {t}
              </span>
            ))}
          </div>
          <div className="ho-app-btn">Confirm booking</div>
        </div>
      </div>

      <div className="ho-toast ho-toast-1">
        <span className="ho-ic green">
          <Icon name="check" size={16} strokeWidth={2.2} />
        </span>
        <div>
          <b>New booking</b>
          <small>Ananya · Tomorrow, 11:30 AM</small>
        </div>
      </div>
      <div className="ho-toast ho-toast-2">
        <span className="ho-ic blue">
          <Icon name="spark" size={16} />
        </span>
        <div>
          <b>Live on iPhone, Android &amp; web</b>
          <small>Launched this week</small>
        </div>
      </div>
    </div>
  );
}

/* Option B — Your business, online and growing ----------------------------- */
export function HeroBusinessGrowth() {
  return (
    <div className="ho ho-b" aria-hidden="true">
      <div className="ho-dash">
        <div className="ho-dash-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="ho-dash-body">
          <div className="ho-dash-hi">
            Good morning, Riya
            <small>Here&apos;s how your business is doing this week</small>
          </div>
          <div className="ho-kpis">
            <div>
              <small>Online orders</small>
              <b>128</b>
              <em>▲ this week</em>
            </div>
            <div>
              <small>New customers</small>
              <b>34</b>
              <em>▲ this week</em>
            </div>
          </div>
          <div className="ho-chart">
            <svg viewBox="0 0 300 90" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ho-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1a6df0" stopOpacity=".28" />
                  <stop offset="1" stopColor="#1a6df0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="area" d="M0 78 C 40 70, 60 74, 90 60 S 150 52, 180 40 S 240 30, 300 10 L300 90 L0 90 Z" fill="url(#ho-fill)" />
              <path className="line" d="M0 78 C 40 70, 60 74, 90 60 S 150 52, 180 40 S 240 30, 300 10" />
            </svg>
          </div>
        </div>
      </div>

      <div className="ho-phone small">
        <div className="ho-phone-screen">
          <div className="ho-shop-hero">
            <b>Fresh &amp; local</b>
            <small>Delivered today</small>
          </div>
          {[
            ["#ffd8a8", "Seasonal box", "₹ 899"],
            ["#c3f0d6", "Organic greens", "₹ 349"],
            ["#d7e3ff", "Breakfast pack", "₹ 499"],
          ].map(([c, n, p]) => (
            <div className="ho-item" key={n}>
              <span style={{ background: c }} />
              <div>
                <b>{n}</b>
                <small>{p}</small>
              </div>
              <i>+</i>
            </div>
          ))}
        </div>
      </div>

      <div className="ho-toast ho-toast-3">
        <span className="ho-ic green">
          <Icon name="check" size={16} strokeWidth={2.2} />
        </span>
        <div>
          <b>New order received</b>
          <small>Seasonal box · Paid online</small>
        </div>
      </div>
      <div className="ho-bubble">
        <span className="ho-ic blue">
          <Icon name="ai" size={16} />
        </span>
        <p>Hi! I can track your order or answer questions, any time.</p>
      </div>
    </div>
  );
}

/* Option C — Built together with you --------------------------------------- */
export function HeroBuiltTogether() {
  const people = [
    ["You", "linear-gradient(135deg,#ffb36b,#ff7a59)"],
    ["Primo", "linear-gradient(135deg,#3b9bff,#1257d6)"],
    ["Design", "linear-gradient(135deg,#a78bfa,#7c5ce6)"],
    ["Dev", "linear-gradient(135deg,#34d399,#0e9f6e)"],
  ];
  return (
    <div className="ho ho-c" aria-hidden="true">
      <div className="ho-call">
        <div className="ho-call-top">
          <span className="ho-live" />
          Weekly demo with Primo Techworks
        </div>
        <div className="ho-call-grid">
          <div className="ho-share">
            <div className="ho-share-ui">
              <span />
              <span />
              <span className="wide" />
              <span className="btn" />
            </div>
            <small>Sharing: your new app</small>
          </div>
          <div className="ho-faces">
            {people.map(([n, g]) => (
              <div key={n} className="ho-face" style={{ background: g }}>
                <b>{n === "You" ? "You" : n[0]}</b>
                <small>{n}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ho-chat">
        <div className="ho-msg you">Love it! Can we add online payments?</div>
        <div className="ho-msg them">Absolutely, it&apos;ll be in next week&apos;s demo.</div>
      </div>

      <div className="ho-progress">
        <small>Your project</small>
        <ol>
          {[
            ["Idea", "done"],
            ["Design", "done"],
            ["Build", "now"],
            ["Launch", ""],
          ].map(([s, st]) => (
            <li key={s} className={st}>
              <span>{st === "done" ? <Icon name="check" size={12} strokeWidth={3} /> : null}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
