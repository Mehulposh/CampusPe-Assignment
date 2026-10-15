import {PARTNERS} from '../../data/content.js'

export default function PartnersStrip() {
  return (
    <>
      <p className="trusted">Trusted by partners across India</p>
      <div className="strip">
       {PARTNERS.map((p,i) => (
          <img src={p.img} alt={p.label} key={i}/>
       ) )}
      </div>
    </>
  );
}
