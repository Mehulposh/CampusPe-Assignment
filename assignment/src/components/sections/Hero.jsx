import HeroChips from './HeroChips.jsx';
import HeroCard from './HeroCard.jsx';
import StatsBar from './StatsBar.jsx';
import PartnersStrip from './PartnersStrip.jsx';
import { HERO_CARDS } from '../../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <HeroChips />
      <div className="cards">
        {HERO_CARDS.map((c) => <HeroCard key={c.title} {...c} />)}
      </div>
      <StatsBar />
      <PartnersStrip />
    </section>
  );
}
