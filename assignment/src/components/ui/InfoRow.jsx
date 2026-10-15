import Tag from './Tag.jsx';

/**
 * Numbered feature card with right-aligned tags.
 * With an `eyebrow` (Colleges): number + label sit above the heading.
 * Without one (Employers): number box sits beside the heading.
 */
export default function InfoRow({ index, eyebrow, title, chip, description, tags }) {
  const num = String(index + 1).padStart(2, '0');
  const heading = <h3>{title}{chip && <s>{chip}</s>}</h3>;
  const rightTags = (
    <div className="rt">
     {tags.map(([label, tone, icon]) => <Tag key={label} tone={tone} icon={icon}>{label}</Tag>)}
    </div>
  );

  if (!eyebrow) {
    return (
      <div className="row inline">
        <span className="n">{num}</span>
        <div className="l">
          {heading}
          <p>{description}</p>
        </div>
        {rightTags}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="l">
        <div className="top"><span className="n">{num}</span>{eyebrow}</div>
        {heading}
        <p>{description}</p>
      </div>
      {rightTags}
    </div>
  );
}