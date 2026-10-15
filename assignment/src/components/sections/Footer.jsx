import logo from '../../assets/CampusPe Logo.png';
import Icon from '../ui/Icon.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import CtaBar from './CtaBar.jsx';
import FooterColumn from './FooterColumn.jsx';
import { FOOTER_COLUMNS, SOCIALS } from '../../data/content.js';

export default function Footer() {
  const say = useToast();
  return (
    <footer className="ft">
      <CtaBar />
      <div className="fg">
        <div>
          <img src={logo} alt="CampusPe" />
          <p className="tl">From choosing a college to finding your next opportunity.</p>
          <p className="ds">CampusPe connects students, colleges and employers in one place.</p>
        </div>
        {FOOTER_COLUMNS.map((c) => <FooterColumn key={c.heading} {...c} />)}
      </div>
      <div className="fb">
        <div>
          <a href="mailto:contactus@campuspe.com"><i><Icon name="mail" /></i>contactus@campuspe.com</a>
          <a href="tel:+916362606464"><i><Icon name="tel" /></i>+91 6362606464</a>
        </div>
        <span><b style={{ color: '#16a34a' }}>●</b> Students · Colleges · Employers</span>
      </div>
      <div className="cp">
        <span>© 2026 CampusPe Technologies Pvt. Ltd. <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Grievance</a></span>
        <div className="so">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.url}  target="_blank" rel="noopener noreferrer" aria-label={s.label} >
               <img src={s.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
