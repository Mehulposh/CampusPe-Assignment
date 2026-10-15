
import Icon from '../ui/Icon.jsx';
import { STATS } from '../../data/content.js';

function Stat({ icon, value, label, bg, fg }) {
  return (
    <div className="stat">
      <span
        className="o"
        style={{ background: bg, color: fg }}
      >
        <Icon name={icon} />
      </span>

      <div className="stat-info">
        <b>{value}</b>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="stats">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} />
      ))}
    </div>
  );
}
