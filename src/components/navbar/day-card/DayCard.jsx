import "./style.css";

// eslint-disable-next-line react/prop-types
function DayCard({ dayNumber, location, setVisibleMap }) {
  return (
    <div
      className="day-card"
      onClick={() => {
        setVisibleMap(dayNumber);
      }}
    >
      <div className="day">DAY {dayNumber}</div>
      <div className="location">{location}</div>
    </div>
  );
}

export default DayCard;
