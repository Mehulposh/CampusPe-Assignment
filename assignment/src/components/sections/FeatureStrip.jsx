import { RESUME_FEATURES } from '../../data/content.js';

export default function FeatureStrip() {
  return (
    <div className="fs">
      {RESUME_FEATURES.map((f) => (
        <div key={f.title}>
          <i style={{ background: f.bg, color: f.fg }}>{f.mark}</i>
          <span>{f.title}<small style={{ color: f.fg }}>{f.sub}</small></span>
        </div>
      ))}
    </div>
  );
}
