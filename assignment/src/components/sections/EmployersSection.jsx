import SplitSection from '../ui/SplitSection.jsx';
import InfoRow from '../ui/InfoRow.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import { EMPLOYER_ROWS } from '../../data/content.js';

export default function EmployersSection() {
  return (
    <SplitSection
      id="employers"
      tone="b employers"
      // style={{ paddingTop: 70 }}
      eyebrow="03 • For employers"
      title="Stop running campus drives. "
      accent="Start hiring the right people."
      lead="Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond."
      action={
        <Button variant="pill" toast="Job posting opens soon">
          Post a Job <Icon name="arr" />
        </Button>
      }
    >
      <div className="rw">{EMPLOYER_ROWS.map((r, i) => <InfoRow key={r.title} index={i} {...r} />)}</div>
    </SplitSection>
  );
}
