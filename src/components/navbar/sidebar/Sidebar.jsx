import DayCard from "../day-card/DayCard";
import "./style.css";

// eslint-disable-next-line react/prop-types
function Sidebar({ setVisibleMap }) {
  return (
    <div className="sidebar">
      <DayCard
        dayNumber={1}
        location={"location 1"}
        setVisibleMap={setVisibleMap}
      />
      <DayCard
        dayNumber={2}
        location={"location 2"}
        setVisibleMap={setVisibleMap}
      />
      <DayCard
        dayNumber={3}
        location={"location 3"}
        setVisibleMap={setVisibleMap}
      />
    </div>
  );
}

export default Sidebar;
