import Sidebar from "../sidebar/Sidebar";
import Map from "../map/Map";
import { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";

const MapWithSidebar = () => {
  const [visibleMap, setVisibleMap] = useState("1");
  return (
    <div className="map-with-sidebar">
      <Sidebar setVisibleMap={setVisibleMap} />
      <div className="map-and-continue">
        <Map visibleMap={visibleMap} />
        <Button>Continue</Button>
      </div>
    </div>
  );
};

export default MapWithSidebar;
