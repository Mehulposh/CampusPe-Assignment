import Icon from './Icon.jsx';

/** tone: "" | gr | pu | bl | bo | rd | gn | gy | o. icon: an Icon name, or "dot-g" / "dot-r" for a coloured dot. */
export default function Tag({ tone = '', icon, children }) {
  return (
    <span className={`tg ${tone}`.trim()}>
      {icon && (icon.startsWith('dot') ? <i className={`dot ${icon}`} /> : <Icon name={icon} />)}
      {children}
    </span>
  );
}