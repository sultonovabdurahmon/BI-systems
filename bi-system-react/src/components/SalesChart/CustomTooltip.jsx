import "./CustomTooltip.css";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="custom-tooltip">
      <div className="tooltip-title">{label}</div>

      <div className="tooltip-value">
        Sales: <strong>{payload[0].value}%</strong>
      </div>
    </div>
  );
}

export default CustomTooltip;