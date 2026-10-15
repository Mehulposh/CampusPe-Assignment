import { useRef, useState } from 'react';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import FeatureStrip from './FeatureStrip.jsx';

const MAX_BYTES = 10 * 1024 * 1024;

/** Drag-and-drop / file-picker with client-side type and size checks. */
export default function ResumeUpload() {
  const input = useRef(null);
  const [over, setOver] = useState(false);
  const [status, setStatus] = useState({ ok: true, text: '' });

  const take = (file) => {
    if (!file) return;
    if (!/\.(pdf|docx?)$/i.test(file.name)) return setStatus({ ok: false, text: 'Please upload a PDF, DOC or DOCX file.' });
    if (file.size > MAX_BYTES) return setStatus({ ok: false, text: 'File is larger than 10MB.' });
    setStatus({ ok: true, text: `✓ ${file.name} uploaded. Matching jobs…` });
  };
  const drag = (on) => (e) => { e.preventDefault(); setOver(on); };

  return (
    <section className="res" id="resume">
      <div className="wrap">
        <span className="live2">TRY IT LIVE <span>v2.4 AI Engine</span></span>
        <h2>Upload your resume.<em style={{ color: 'var(--brand)' }}>Find jobs that fit.</em></h2>
        <p className="sub">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>

        <div className={`dz${over ? ' over' : ''}`} onDragEnter={drag(true)} onDragOver={drag(true)} onDragLeave={drag(false)}
             onDrop={(e) => { drag(false)(e); take(e.dataTransfer.files[0]); }}>
          <div className="fc a"><i><Icon name="bolt" /></i><span>98% Match Rate<small>AI semantic rank</small></span></div>
          <div className="fc b"><i><Icon name="lock" /></i><span>ATS Compliant<small>Standardized parser</small></span></div>
          <div className="dz-inner">
            <h3>Upload your resume</h3>
            <p>PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience.</p>
            <input ref={input} type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => take(e.target.files[0])} />
            <Button variant="pill" onClick={() => input.current.click()}>Upload resume <Icon name="arr" style={{ transform: 'rotate(-90deg)' }} /></Button>
            <small>or drag and drop your file here</small>
            <div className="fm">
              <span>PDF</span>
              <span>DOC</span>
              <span>DOCX</span>
            </div>
            <div className="ok" role="status" style={{ color: status.ok ? '#16a34a' : '#dc2626' }}>{status.text}</div>
          </div>
        </div>

        <FeatureStrip />
      </div>
    </section>
  );
}
