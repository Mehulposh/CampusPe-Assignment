import SplitSection from '../ui/SplitSection.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import StepCard from './StepCard.jsx';
import OpportunityFeed from './OpportunityFeed.jsx';
import { OPPORTUNITY_STEPS } from '../../data/content.js';

export default function OpportunitySection() {
  return (
    <SplitSection
      id="jobs"
      tone="glow"
      eyebrow="01 • Opportunity discovery"
      title="Stop searching."
      accent="Start getting matched."
      accentBlock
      lead="Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear."
      extra={<div className="steps">{OPPORTUNITY_STEPS.map((s, i) => <StepCard key={s.title} index={i} {...s} />)}</div>}
      action={<Button variant="pill" href="#resume">Explore opportunities <Icon name="arr" /></Button>}
    >
      <OpportunityFeed />
    </SplitSection>
  );
}
