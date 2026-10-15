import googlePlay from '../../assets/gp.png';
import appStore from '../../assets/as.png';
import mockup from '../../assets/iPhone 12 Pro.png';
import Button from '../ui/Button.jsx';

function StoreBadge({ src, alt, w, toast }) {
  return (
    <Button variant="" href="#" toast={toast} className="st" style={{}} aria-label={alt}>
      <img src={src} width={w} height="49" alt={alt} />
    </Button>
  );
}

export default function DownloadApp() {
  return (
    <div className="dl">
      <div>
        <h2>Download App Now</h2>
        <p>Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you're a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection.Your career doesn't start at graduation—it starts here.</p>
        <StoreBadge src={googlePlay} alt="Get it on Google Play" w="150" toast="Google Play listing coming soon" />
        <StoreBadge src={appStore} alt="Download on the App Store" w="154" toast="App Store listing coming soon" />
      </div>
      <img className="mk" src={mockup} width="750" height="390" alt="CampusPe app on two phones" />
    </div>
  );
}
