import Sidebar from "../sidebar/Sidebar";
import Map from "../map/Map";
import { useState } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MapWithSidebar = () => {
  const navigate = useNavigate()
  const [visibleMap, setVisibleMap] = useState("1");
  return (
    <div className="map-with-sidebar">
      <Sidebar setVisibleMap={setVisibleMap} />
      <div className="map-and-continue">
        <Map visibleMap={visibleMap} />
        <Button onClick={() => {navigate('/checkout')}}>Continue</Button>
      </div>
    </div>
  );
};

export default MapWithSidebar;
