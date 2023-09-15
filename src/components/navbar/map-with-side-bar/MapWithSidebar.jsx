import Sidebar from "../sidebar/Sidebar"
import Map from "../map/Map"
import { useState } from "react"
import "./style.css"

const MapWithSidebar =()=>{

    const [visibleMap, setVisibleMap] = useState("1")
    return(
        <div className="map-with-sidebar">
      <Sidebar setVisibleMap={setVisibleMap}/>
      <Map visibleMap={visibleMap}/>
    </div>
    )
}

export default MapWithSidebar