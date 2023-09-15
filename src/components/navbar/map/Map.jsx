import Places from "../../places/Places";
import Popup from "../../popup/popup";
import "./style.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Map = ({ visibleMap }) => {
  const mapData = [
    {
      id: 1,
      image: "public/assets/map1.png",
      places: [
        {
          id: 1,
          top: "200px",
          left: "500px",
        },
        {
          id: 2,
          top: "400px",
          left: "700px",
        },
        {
            id: 2,
            top: "500px",
            left: "150px",
          },
      ],
    },
    {
      id: 2,
      image: "public/assets/map2.png",
      places: [
        {
          id: 1,
          top: "500px",
          left: "400px",
        },
        {
          id: 2,
          top: "150px",
          left: "700px",
        },
        {
            id: 2,
            top: "200px",
            left: "-100px",
          },
      ],
    },
    {
      id: 3,
      image: "public/assets/map3.jpg",
      places: [
        {
          id: 1,
          top: "200px",
          left: "500px",
        },
        {
          id: 2,
          top: "400px",
          left: "700px",
        },
        {
            id: 2,
            top: "500px",
            left: "150px",
          },
      ],
    },
  ];

  console.log(visibleMap);

  const map = mapData.find((item) => {
    return item.id == visibleMap;
  });

  console.log(map);

  return (
    <div className="map">
      {map.places.map((item) => {
        return (
          <div key={item.id}>
            <Places top={item.top} left={item.left} />
          </div>
        );
      })}

      <img className="map-image" src={map.image} alt="map1" />
    </div>
  );
};

export default Map;
