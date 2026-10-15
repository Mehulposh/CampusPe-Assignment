/** Small coloured label. tone: "" | gr | pu | bl | rd | gn | gy | o */
export default function Tag({ tone = '', children }) {
  return <span className={`tg ${tone}`.trim()}>{children}</span>;
}
