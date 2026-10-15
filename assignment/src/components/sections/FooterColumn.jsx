export default function FooterColumn({ heading, links, note }) {
  return (
    <div>
      <h4>{heading}</h4>
      <ul>
        {links.map((l) => (
          <li key={l}><a className={l.includes('→') ? 'v' : undefined} href="#">{l}</a></li>
        ))}
      </ul>
      {note && <div className="note">{note}</div>}
    </div>
  );
}
