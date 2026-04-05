const lanternLayers = {
  foreground: [
    {
      className: "lantern lantern-foreground lantern-left-top",
      top: "2%",
      left: "-2%",
      duration: "8.8s",
      delay: "0s",
      drift: "10px",
      size: "clamp(124px, 11vw, 160px)",
    },
    {
      className: "lantern lantern-foreground lantern-right-top",
      top: "3%",
      right: "-1.5%",
      duration: "9.6s",
      delay: "1.1s",
      drift: "-12px",
      size: "clamp(128px, 12vw, 164px)",
    },
  ],
  mid: [
    {
      className: "lantern lantern-mid lantern-mid-left",
      top: "17%",
      left: "8%",
      duration: "11.2s",
      delay: "0.9s",
      drift: "8px",
      size: "clamp(88px, 8vw, 118px)",
    },
    {
      className: "lantern lantern-mid lantern-mid-center-left",
      top: "8%",
      left: "28%",
      duration: "12.4s",
      delay: "2.3s",
      drift: "-7px",
      size: "clamp(84px, 7vw, 110px)",
    },
    {
      className: "lantern lantern-mid lantern-mid-center-right",
      top: "12%",
      right: "24%",
      duration: "10.6s",
      delay: "1.6s",
      drift: "6px",
      size: "clamp(82px, 7vw, 108px)",
    },
    {
      className: "lantern lantern-mid lantern-mid-right",
      top: "20%",
      right: "7%",
      duration: "11.8s",
      delay: "3s",
      drift: "-8px",
      size: "clamp(90px, 8vw, 116px)",
    },
  ],
  background: [
    { className: "lantern lantern-background lantern-bg-1", top: "32%", left: "4%", duration: "14s", delay: "0.4s", drift: "5px", size: "clamp(50px, 4.8vw, 70px)" },
    { className: "lantern lantern-background lantern-bg-2", top: "38%", left: "20%", duration: "15.2s", delay: "2s", drift: "-4px", size: "clamp(44px, 4.2vw, 64px)" },
    { className: "lantern lantern-background lantern-bg-3", top: "28%", left: "42%", duration: "13.4s", delay: "1.5s", drift: "6px", size: "clamp(48px, 4.4vw, 66px)" },
    { className: "lantern lantern-background lantern-bg-4", top: "34%", right: "34%", duration: "14.8s", delay: "2.8s", drift: "-5px", size: "clamp(46px, 4vw, 60px)" },
    { className: "lantern lantern-background lantern-bg-5", top: "42%", right: "18%", duration: "15.6s", delay: "0.8s", drift: "4px", size: "clamp(48px, 4.4vw, 64px)" },
    { className: "lantern lantern-background lantern-bg-6", top: "30%", right: "4%", duration: "14.2s", delay: "3.2s", drift: "-6px", size: "clamp(52px, 4.8vw, 72px)" },
  ],
};

const particles = [
  { className: "gold-particle particle-1", left: "6%", top: "16%", delay: "0.3s", duration: "10s", size: "4px" },
  { className: "gold-particle particle-2", left: "18%", top: "28%", delay: "1.5s", duration: "12s", size: "5px" },
  { className: "gold-particle particle-3", left: "33%", top: "12%", delay: "0.8s", duration: "11s", size: "3px" },
  { className: "gold-particle particle-4", left: "48%", top: "22%", delay: "2.4s", duration: "13s", size: "4px" },
  { className: "gold-particle particle-5", left: "61%", top: "14%", delay: "1.1s", duration: "10.6s", size: "5px" },
  { className: "gold-particle particle-6", left: "76%", top: "26%", delay: "2.8s", duration: "12.8s", size: "4px" },
  { className: "gold-particle particle-7", left: "88%", top: "18%", delay: "0.5s", duration: "11.7s", size: "3px" },
  { className: "gold-particle particle-8", left: "24%", top: "48%", delay: "2.1s", duration: "12.2s", size: "4px" },
  { className: "gold-particle particle-9", left: "57%", top: "56%", delay: "1.8s", duration: "13.4s", size: "5px" },
  { className: "gold-particle particle-10", left: "82%", top: "46%", delay: "3s", duration: "12.6s", size: "4px" },
];

const bridgeIcons = [
  { className: "bridge-icon bridge-icon-left", viewBox: "0 0 120 56" },
  { className: "bridge-icon bridge-icon-center", viewBox: "0 0 120 56" },
  { className: "bridge-icon bridge-icon-right", viewBox: "0 0 120 56" },
];

function BridgeIcon({ className, viewBox }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true">
      <path d="M12 40C28 38 34 18 60 18s32 20 48 22" />
      <path d="M22 40v-8m18 8V28m20 12V28m18 12v-8" />
      <path d="M10 42h100" />
    </svg>
  );
}

function ChineseExperienceLayer() {
  return (
    <div className="chinese-experience-layer" aria-hidden="true">
      <div className="ambient-red-glow" />
      <div className="cloud-pattern cloud-pattern-top" />
      <div className="cloud-pattern cloud-pattern-left" />
      <div className="cloud-pattern cloud-pattern-right" />
      <div className="cloud-pattern cloud-pattern-side" />

      <div className="gold-particles">
        {particles.map((particle) => (
          <span
            key={particle.className}
            className={particle.className}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="chinese-lanterns lantern-layer lantern-layer-background">
        {lanternLayers.background.map((item) => (
          <img
            key={item.className}
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
            alt=""
            className={item.className}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              height: "auto",
              animationDelay: item.delay,
              animationDuration: item.duration,
              "--lantern-drift": item.drift,
            }}
          />
        ))}
      </div>

      <div className="chinese-lanterns lantern-layer lantern-layer-mid">
        {lanternLayers.mid.map((item) => (
          <img
            key={item.className}
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
            alt=""
            className={item.className}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              height: "auto",
              animationDelay: item.delay,
              animationDuration: item.duration,
              "--lantern-drift": item.drift,
            }}
          />
        ))}
      </div>

      <div className="chinese-lanterns lantern-layer lantern-layer-foreground">
        {lanternLayers.foreground.map((item) => (
          <img
            key={item.className}
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
            alt=""
            className={item.className}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              height: "auto",
              animationDelay: item.delay,
              animationDuration: item.duration,
              "--lantern-drift": item.drift,
            }}
          />
        ))}
      </div>

      <div className="bridge-icons" aria-hidden="true">
        {bridgeIcons.map((icon) => (
          <BridgeIcon key={icon.className} className={icon.className} viewBox={icon.viewBox} />
        ))}
      </div>
    </div>
  );
}

export default ChineseExperienceLayer;
