import linkedin from '../assets/LD.png';
import instagram from '../assets/Icon.png';
import twitter from '../assets/Twitt.png';
import facebook from '../assets/FB.png';
import whatsapp from '../assets/WP.png';
import youtube from '../assets/YT.png';

import iim from '../assets/IIM.png';
import google from '../assets/Google.png';
import notion from '../assets/Notion.png';

import genserv from '../assets/Ginserv.png'
import frame from '../assets/Frame.png'
import radiant from '../assets/Radiant.png'
import spotify from '../assets/Spotify.png'
import startup from '../assets/Startup.png'

// All page copy lives here so components stay presentational.

export const NAV_LINKS = [
  { label: 'Colleges', href: '#colleges' },
  { label: 'Employers', href: '#employers' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Blogs', href: '#app' },
];

export const HERO_CARDS = [
  {
    icon: 'uni', badge: 'Coming Soon', title: 'College', illustration: 'building',
    description: 'Explore colleges, courses,fees, placements & more',
    points: ['Search by course, location, fees', 'Connect directly with colleges', 'Improve student placements'],
    cta: 'Join Waitlist', ctaIcon: 'bell', toast: "You're on the college waitlist!",
  },
  {
    icon: 'cap', badge: 'Available Now', title: "I'm Looking for a Job", illustration: 'resume',
    description: "Upload your resume. We'll find jobs that fit you.",
    points: ['Jobs from 1000+ sources', 'AI powered matching', 'WhatsApp & email alerts'],
    cta: 'Explore Jobs', ctaIcon: 'arr', href: '#resume',
  },
  {
    icon: 'case', badge: 'Coming Soon', title: "I'm Hiring", illustration: 'code',
    description: 'Connect with colleges and find candidates — from students to graduates.',
    points: ['Connect directly with colleges', 'Find the right candidates', 'Simplify your hiring'],
    cta: 'Join Waitlist', ctaIcon: 'bell', toast: "You're on the employer waitlist!",
  },
];

export const STATS = [
  { icon: 'users', value: '800+', label: 'Students', bg: '#efeafe', fg: '#7c5cf0' },
  { icon: 'uni', value: '130+', label: 'colleges', bg: '#dcecfd', fg: '#2563eb' },
  { icon: 'case', value: '100+', label: 'jobs & internships', bg: '#d9f3e6', fg: '#16a34a' },
  { icon: 'shield', value: '100%', label: 'Safe & Trusted', bg: '#fde9dc', fg: '#f97316' },
];

export const PARTNERS = [
  {label: 'genserv', img: genserv },
  {label: 'Startup', img: startup },
  {label: 'frame', img: frame },
  {label: 'Spotify' , img: spotify},
  {label: 'radiant' , img: radiant }
]; 

export const OPPORTUNITY_STEPS = [
  { title: 'Set your preferences', tag: 'Smart Profile', description: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", },
  { title: 'Discover relevant opportunities', tag: 'AI Ranked', description: 'Explore colleges and career opportunities matched to your profile, interests and goals' },
  { title: 'Get notified when something fits', tag: 'Instant Alerts', description: 'Get notified when a relevant college or new opportunity is found, so you can act early.' },
];

export const FEED_TABS = ['All', 'Colleges', 'Jobs', 'Internships', 'Freelance', 'Part-time'];

export const FEED_ITEMS = [
  { category: 'Colleges', category: 'Colleges', logoImg: iim, title: 'IIM Bangalore', title: 'IIM Bangalore', tag: 'Top College', tagClass: '', meta: [['book', 'MBA'], ['pin', 'Bengaluru'], ['bolt', '₹3L+']], description: "India's premier management institute with global exposure...", cta: 'View Details' },
  { category: 'Internships', category: 'Internships', logoImg: google, title: 'Product Intern', tag: 'Internship', tagClass: 'b', meta: [['pin', 'Bengaluru'], ['case', 'Hybrid'], ['bolt', '₹35K/mo']], description: 'Work on real products, learn from top engineers and build...', cta: 'Apply Now' },
  { category: 'Freelance', category: 'Freelance', logoImg: notion, title: 'Marketing Gig', title: 'Marketing Gig', tag: 'Freelance', tagClass: 'g', meta: [['pin', 'Remote'], ['case', 'Freelance'], ['bolt', '₹10K - ₹25K']], description: 'Create content and help with social media campaigns for...', cta: 'View Details' },
  { category: 'Jobs', logo: 'A', logoClass: '', title: 'Associate Analyst', tag: 'Full-time', tagClass: 'g', meta: [['pin', 'Delhi'], ['case', 'On-site'], ['bolt', '₹6L+']], description: 'Join a growing analytics team hiring fresh graduates.', cta: 'Apply Now' },
  { category: 'Part-time', logo: 'S', logoClass: '', title: 'Campus Ambassador', tag: 'Part-time', tagClass: 'b', meta: [['pin', 'Remote'], ['case', 'Part-time'], ['bolt', '₹8K/mo']], description: 'Represent a brand at your college and earn rewards.', cta: 'Apply Now' },
];

export const RESUME_FEATURES = [
  { mark: '✓', title: 'Resume analyzed', sub: '● Ready in 4s', bg: '#e6f8ee', fg: '#16a34a' },
  { mark: '✓', title: 'Skills matched', sub: 'Deep taxonomy', bg: '#eceeff', fg: '#4f46e5' },
  { mark: '✓', title: 'Experience matched', sub: 'Contextual seniority', bg: '#f2ebff', fg: '#7c3aed' },
  { mark: '✓', title: '1,000+ sources searched', sub: 'Real-time aggregators', bg: '#e8f0ff', fg: '#2563eb' },
];

export const COLLEGE_ROWS = [
  { eyebrow: 'Verified profile', title: 'Build your college profile', description: 'Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.', tags: [['NAAC A++ Ready', 'gr', 'badge'], ['98% Match', 'bo']] },
  { eyebrow: 'Direct enroll', title: 'Students discover and connect', description: 'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.', tags: [['Direct Enquiries', '', 'chat'], ['WHATSAPP / CHAT', 'gy', 'dot-g'], ['Avg. response: <15 min', 'o']] },
  { eyebrow: 'Campus recruiting', title: 'Recruiters discover your College', description: 'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.', tags: [['500+ Hiring Partners', 'pu', 'building'], ['Connect Directly', '', 'scale']] },
  { eyebrow: 'Live hub', title: 'Track placements in real time', description: 'Track students, interviews, offers and placements from one centralized dashboard.', tags: [['LIVE PLACEMENTS', 'rd', 'dot-r'], ['Students · Interviews · Offers', 'bl']] },
];

export const EMPLOYER_ROWS = [
  { title: 'Post a role in minutes', chip: 'Instant setup', description: 'Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.', tags:  [['5 Min Deployment', 'gn', 'bolt'], ['500+ Campus Network', 'gy']]},
  { title: 'Receive a matched shortlist', chip: 'Instant setup', description: 'Get candidates matched to your role by skills, experience, location and hiring requirements.', tags: [['Zero CV Clutter', 'pu', 'circle'], ['Tier 1–Tier 3 Parity', 'gy']] },
  { title: 'Connect with candidates directly', chip: 'Instant setup', description: 'Message, schedule interviews, and move candidates through your pipeline — all in one place.', tags: [['In-App Scheduling', '', 'chat'], ['1-Click Video / Chat', 'gy']] },
  { title: 'Reduce your time-to-hire', chip: 'Instant setup', description: 'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.', tags:[['<2 DAYS', 'bl'], ['57% Faster Hiring', 'gn']] },
];

export const FOOTER_COLUMNS = [
  { heading: 'For Students', links: ['Explore Colleges', 'Find Opportunities', 'Internships', 'Full-time Jobs', 'Part-time & Gig', 'Application Tracker'] },
  { heading: 'For Colleges', links: ['List Your College', 'Admissions', 'Fee Collection', 'Placements'] },
  { heading: 'For Employers', links: ['Post a Job', 'Find Talent', 'Campus Hiring'] },
  { heading: 'Company', links: ['About Us', 'Contact Us', 'Blogs', 'Careers'] },
  { heading: 'Legal & Policies', links: ['Privacy Policy', 'Terms & Conditions', 'Refund & Cancellation Policy', 'Cookie Policy', 'Grievance Redressal', 'Job & Internship Disclaimer', 'View all policies →'], note: 'Separate user, institution and employer terms can live inside the full Policies page.' },
];

export const SOCIALS = [
  { label: 'LinkedIn', icon: linkedin },
  { label: 'Instagram', icon: instagram , url: 'https://www.instagram.com/campuspe_official?stkn=MTQ0bHpmMWhxM2Y1bg%3D%3D'},
  { label: 'Twitter', icon: twitter },
  { label: 'Facebook', icon: facebook },
  { label: 'WhatsApp', icon: whatsapp },
  { label: 'YouTube', icon: youtube , url:'https://www.youtube.com/@campuspe-tech?si=_Kw-Ktch1ib0oxxX'},
];
