import Eyebrow from './Eyebrow.jsx';

/**
 * Two-column section: copy + CTA on the left, `children` on the right.
 * Used by Opportunity, Colleges and Employers sections.
 */
export default function SplitSection({ id, tone = '', eyebrow, title, accent, accentBlock = false, lead, extra, action, style, children }) {
  return (
    <section className={`sec ${tone}`.trim()} id={id} style={style}>
      <div className="split">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>
            {title}
            <em style={accentBlock ? undefined : { display: 'inline' }}>{accent}</em>
          </h2>
          <p className="lead">{lead}</p>
          {extra}
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}
