import "./StatCard.css";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  trendIcon,
  subtitleType
}) {
  return (
    <div className="stat-card">

      <div className="stat-top">
        <p>{title}</p>

        <img src={icon} alt="icon" className="stat-icon" />
      </div>

      <h2>{value}</h2>

      <div className={`stat-subtitle ${subtitleType}`}>
        <img src={trendIcon} alt="trend" className="trend-icon" />
        <span>
          <span>{subtitle.split("%")[0]}%</span>
          {subtitle.split("%")[1]}
        </span>
      </div>

    </div>
  );
}

export default StatCard;