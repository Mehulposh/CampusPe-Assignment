const PATHS = {
  arr: <path d="M5 12h14M13 6l6 6-6 6" />,
  bell: <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  spark: <path d="M12 3l2 6 6 3-6 3-2 6-2-6-6-3 6-3z" />,
  uni: <path d="M3 9l9-5 9 5H3zM5 20V9M9 20V9M15 20V9M19 20V9M3 20h18" />,
  cap: <path d="M2 9l10-5 10 5-10 5zM6 11v5c3 3 9 3 12 0v-5" />,
  case: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></>),
  users: (<><circle cx="9" cy="8" r="3.5" /><path d="M2 20c0-4 3-6 7-6s7 2 7 6M17 4a3.5 3.5 0 010 7M22 19c0-3-2-5-4-5.5" /></>),
  shield: <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />,
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  tel: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />,
  pin: (<><path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>),
  book: <path d="M3 5h7a2 2 0 012 2v13a2 2 0 00-2-2H3zM21 5h-7a2 2 0 00-2 2v13a2 2 0 012-2h7z" />,
  chk: <path d="M5 12l5 5 9-10" />,
  srch: (<><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>),
  badge: (<><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>),
  chat: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
  building: (<><rect x="4" y="3" width="12" height="18" rx="1" /><path d="M16 9h4v12h-4M8 7h4M8 11h4M8 15h4" /></>),
  scale: <path d="M12 3v18M6 21h12M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z" />,
  circle: (<><circle cx="12" cy="12" r="9" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>),
};

export default function Icon({ name, className = '', style }) {
  return (
    <svg className={`i ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" style={style}>
      {PATHS[name]}
    </svg>
  );
}
