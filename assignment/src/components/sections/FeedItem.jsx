import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function FeedItem({ logo, logoClass, title, tag, tagClass, meta, description, cta ,logoImg}) {
  return (
    <div className="it">
      {logoImg
        ? <img className="lg-img" src={logoImg} alt="" width="44" height="44" />
        : <span className={`lg ${logoClass}`.trim()}>{logo}</span>
      }
      <div className="m">
        <h4>{title}<s className={tagClass}>{tag}</s></h4>
        <div className="r">
          {meta.map(([icon, text]) => <span key={text}><Icon name={icon} /><b>{text}</b></span>)}
        </div>
        <p>{description}</p>
      </div>
      <Button variant="xs" toast="Details open in the full app">{cta}</Button>
    </div>
  );
}
