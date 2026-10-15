import { useState } from 'react';
import Icon from '../ui/Icon.jsx';
import FeedItem from './FeedItem.jsx';
import { FEED_TABS, FEED_ITEMS } from '../../data/content.js';


/** Card with filter tabs; "All" shows the top three, other tabs show their matches. */
export default function OpportunityFeed() {
  const [active, setActive] = useState('All');
  const items = FEED_ITEMS.filter((f) => active === 'All' || f.category === active).slice(0, active === 'All' ? 3 : 9);

  return (
    <div>
    <div className="feed">
      <div className="fh">
        <span className="b"><Icon name="bolt" /></span>
        <div className="l"><b>CampusPe Opportunity Feed</b><small>Colleges &amp; opportunities matched to you</small></div>
        <span className="live">12 new matches today</span>
      </div>

      <div className="tabs" role="tablist">
        {FEED_TABS.map((t) => (
          <button key={t} type="button" role="tab" className="tab" aria-selected={t === active} onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      <div aria-live="polite">
        {items.length
          ? items.map((f) => <FeedItem key={f.title} {...f} />)
          : <p style={{ color: '#64748b', padding: '14px 0', fontSize: 14 }}>No matches yet. Check back soon.</p>}
      </div>
      <div className="ff">
        <a href="#resume">View all matched opportunities <Icon name="arr" /></a>
        <span>Curated for you • Updated daily</span>
      </div>
    
    </div>
     <div className="hand-note">              {/* new: the handwritten note */}
      <svg viewBox="0 0 40 28" aria-hidden="true">
        <path d="M36 24C24 24 14 18 8 6M8 6l-1 9M8 6l9 2" />
      </svg>
      <p>A mix of colleges, jobs,<br />internships and gigs — all in one place.</p>
    </div>
    </div>
  );
}
