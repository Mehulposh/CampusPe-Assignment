import Button from '../ui/Button.jsx';

export default function CtaBar() {
  return (
    <div className="cta">
      <div>
        <h2>Ready for what’s next?</h2>
        <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
      </div>
      <div className="g">
        <Button href="#colleges">Explore Colleges →</Button>
        <Button href="#jobs">Find Opportunities →</Button>
        <Button variant="out" href="#colleges">List Your College →</Button>
        <Button variant="out" href="#employers">Post a Job →</Button>
      </div>
    </div>
  );
}
