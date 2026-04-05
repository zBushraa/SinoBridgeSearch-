function ChineseDecorations() {
  return (
    <div className="chinese-decorations" aria-hidden="true">
      <div className="lantern lantern-left">
        <span className="lantern-body" />
        <span className="lantern-tassel" />
      </div>
      <div className="lantern lantern-right">
        <span className="lantern-body" />
        <span className="lantern-tassel" />
      </div>

      <div className="gold-particles">
        <span className="gold-particle particle-one" />
        <span className="gold-particle particle-two" />
        <span className="gold-particle particle-three" />
        <span className="gold-particle particle-four" />
        <span className="gold-particle particle-five" />
        <span className="gold-particle particle-six" />
      </div>

      <svg className="cloud cloud-left" viewBox="0 0 220 120" role="presentation">
        <path d="M28 72c16-25 42-31 64-20 9-22 33-32 55-22 19-10 43 0 51 20 15 1 25 13 24 27-1 15-14 25-30 25H54C32 102 20 91 20 75c0-1 0-2 8-3Z" />
        <path d="M66 54c8 6 15 7 25 1 8 9 18 11 30 4" />
      </svg>
      <svg className="cloud cloud-right" viewBox="0 0 220 120" role="presentation">
        <path d="M28 72c16-25 42-31 64-20 9-22 33-32 55-22 19-10 43 0 51 20 15 1 25 13 24 27-1 15-14 25-30 25H54C32 102 20 91 20 75c0-1 0-2 8-3Z" />
        <path d="M66 54c8 6 15 7 25 1 8 9 18 11 30 4" />
      </svg>

      <svg className="red-knot" viewBox="0 0 120 160" role="presentation">
        <path d="M60 8c12 20 30 30 30 48 0 12-9 21-20 21-5 0-8-1-10-3-2 2-5 3-10 3-11 0-20-9-20-21 0-18 18-28 30-48Z" />
        <path d="M38 78c6 9 13 14 22 16-9 2-16 7-22 16-6-9-13-14-22-16 9-2 16-7 22-16Z" />
        <path d="M82 78c6 9 13 14 22 16-9 2-16 7-22 16-6-9-13-14-22-16 9-2 16-7 22-16Z" />
        <path d="M60 78c12 18 12 31 0 48-12-17-12-30 0-48Z" />
        <path d="M60 126v18" />
        <path d="M60 144l-10 8" />
        <path d="M60 144l10 8" />
      </svg>
    </div>
  );
}

export default ChineseDecorations;
