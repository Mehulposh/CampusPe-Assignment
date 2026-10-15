import SplitSection from '../ui/SplitSection.jsx';
import InfoRow from '../ui/InfoRow.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import { COLLEGE_ROWS } from '../../data/content.js';

export default function CollegesSection() {
  return (
    <SplitSection
      id="colleges"
      tone="b colleges"
      eyebrow="02 • For colleges"
      title={<>Get Discovered<br />by </>}
      accent="Students and Recruiters."
      lead="Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities."
      action={<Button variant="pill" toast="Thanks! We'll contact you about listing your college">List Your College <Icon name="arr" /></Button>}
    >
      <div className="rw">{COLLEGE_ROWS.map((r, i) => <InfoRow key={r.title} index={i} {...r} />)}</div>
    </SplitSection>
  );
}
