import genserv from '../../assets/Ginserv.png'
import frame from '../../assets/Frame.png'
import radiant from '../../assets/Radiant.png'
import spotify from '../../assets/Spotify.png'
import startup from '../../assets/Startup.png'

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
