import { Fragment } from 'react';
import Icon from '../ui/Icon.jsx';
import { STATS } from '../../data/content.js';

function Stat({ icon, value, label, bg, fg }) {
  return (
    <div className="stat">
      <span className="o" style={{ background: bg, color: fg }}><Icon name={icon} /></span>
      <div><b>{value}</b><span>{label}</span></div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <Fragment key={s.label}>
          {i > 0 && <hr />}
          <Stat {...s} />
        </Fragment>
      ))}
    </div>
  );
}
