import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function SupportCard() {
  return (
    <section className="sup">
      <div className="sc">
        <h2>Still have questions?</h2>
        <p>Our support team is here to help you succeed. Get in touch anytime.</p>
        <Button href="mailto:contactus@campuspe.com">Contact Support <b>↗</b></Button>
        <Button variant="out" toast="Scheduling opens soon">Schedule a Call <b><Icon name="tel" /></b></Button>
      </div>
    </section>
  );
}
