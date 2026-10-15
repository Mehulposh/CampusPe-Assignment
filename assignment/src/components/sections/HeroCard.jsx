import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import useTilt from '../../hooks/useTilt.js';

function Illustration({ kind }) {
  if (kind === 'building') return <span className="ill i1" />;
  if (kind === 'code') return <span className="ill i3" />;
  return (
    <span className="ill i2">
      <s /><s /><s /><s />
      <em><Icon name="srch" /></em>
    </span>
  );
}

export default function HeroCard({ icon, badge, title, description, points, illustration, cta, ctaIcon, href, toast }) {
  const ref = useTilt();
  return (
    <article className="card" ref={ref}>
      <div className="ct">
        <span className="ico"><Icon name={icon} /></span>
        <span className="bd">{badge}</span>
      </div>
      <h3>{title}</h3>
      <p className="d">{description}</p>
      <ul>
        {points.map((p) => <li key={p}><i><Icon name="chk" /></i>{p}</li>)}
      </ul>
      <Illustration kind={illustration} />
      <Button variant="blk" href={href} toast={toast}>{cta} <Icon name={ctaIcon} /></Button>
    </article>
  );
}
