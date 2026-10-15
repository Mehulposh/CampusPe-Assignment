import Icon from '../ui/Icon.jsx';
import wp from '../../assets/WP-Green.png'
import ai from '../../assets/AI.png'

/** Floating info chips + headline copy that sit above the hero cards. */
export default function HeroChips() {
  return (
    <div className="box">
      <div className="chip c1">
        <b><img src={wp}/>WhatsApp Alert</b>
        <p>Get notified on whatsapp</p>
        <small>You'll get all important updates on your whatsapp</small>
      </div>
      <div className="chip c2">
        <b><Icon name="bolt" />Resume Builder</b>
        <p>Build Your Resume</p>
        <small>Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</small>
      </div>
      <div className="chip c3">
        <div className="av">
          <i style={{ background: '#3b82f6' }}>AK</i>
          <i style={{ background: '#7c3aed' }}>PR</i>
          <i style={{ background: '#06b6d4' }}>SN</i>
        </div>

        <div className="c3-content">
          <span className="c3-title">
            <b className="green-dot">●</b>
            🔥 142 students matched today
          </span>
          <small>Just now • IIT, BITS, VIT</small>
        </div>
      </div>
      <div className="chip c4">
        <span><b style={{ color: '#0b6bcb' }}>Radiant Info</b> shortlisted 8 interns</span>
        <small style={{ color: '#16a34a' }}>● Verified recruiter • 2 days ago</small>
      </div>

      <div className="ai"><img src={ai} />AI-Powered Campus Assistant</div>
      <div className="ht">
        <h1>Connect <span>10X Faster.</span></h1>
        <p>One platform connecting students, colleges &amp; employers — faster.</p>
      </div>
      <div className="ask"><Icon name="spark" />What are you looking for?<Icon name="spark" /></div>
    </div>
  );
}
