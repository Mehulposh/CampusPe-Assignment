export default function StepCard({ index, title, tag, tone, description }) {
  return (
    <div className={`step${index === 0 ? ' active' : ''}`}>
      <span className="n">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className={`t ${tone}`}>{tag}</span>
    </div>
  );
}