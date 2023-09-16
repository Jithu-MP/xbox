import Places from "../../places/Places";
import Popup from "../../popup/popup";
import "./style.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Map = ({ visibleMap }) => {
  const mapData = [
    {
      id: 1,
      image: "public/assets/map1.jpg",
      places: [
        {
          id: 1,
          top: "200px",
          left: "100px",
        },
        {
          id: 2,
          top: "auto",
          left: "auto",
        },
        {
            id: 3,
            top: "100px",
            left: "auto",
          },
      ],
    },
    {
      id: 2,
      image: "public/assets/map2.jpeg",
      places: [
        {
          id: 1,
          top: "200px",
          left: "200px",
        },
        {
          id: 2,
          top: "auto",
          left: "auto",
        },
        {
            id: 3,
            top: "200px",
            left: "0px",
          },
      ],
    },
    {
      id: 3,
      image: "public/assets/map3.jpeg",
      places: [
        {
          id: 1,
          top: "0px",
          left: "300px",
        },
        {
          id: 2,
          top: "200px",
          left: "200px",
        },
        {
            id: 3,
            top: "auto",
            left: "auto",
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
