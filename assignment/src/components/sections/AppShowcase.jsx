import { useRef, useState } from 'react';
import phones from '../../assets/phones.png';

const SCREENS = 5;

export default function AppShowcase() {
  const scroller = useRef(null);
  const [current, setCurrent] = useState(2);

  const go = (i) => {
    setCurrent(i);
    const el = scroller.current;
    el.scrollTo({ left: ((el.scrollWidth - el.clientWidth) * i) / (SCREENS - 1), behavior: 'smooth' });
  };

  return (
    <div className="wrap">
      <h4>Checkout Our App Interface Look</h4>
      <p>
        Experience the power of a unified campus ecosystem right in your pocket. <b>CampusPe</b> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
      </p>
      <div className="ph" ref={scroller}>
        <img src={phones} width="1180" height="600" alt="CampusPe app screens: discover, post a job, my applications" />
      </div>
      <div className="dots">
        {Array.from({ length: SCREENS }, (_, i) => (
          <button key={i} type="button" aria-label={`Screen ${i + 1}`} aria-current={i === current ? 'true' : undefined} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}
