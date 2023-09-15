import "./style.css"

// eslint-disable-next-line react/prop-types
const Map = ({ visibleMap }) => {

    const mapData = [
        {
            id:1,
            image:"public/assets/map1.png" 
        },
        {
            id:2,
            image:"public/assets/map2.png" 
        },
        {
            id:3,
            image:"public/assets/map3.png" 
        }
    ]

    const map = mapData.find((item)=>{item.id==visibleMap})
  return (
    <div>
      {visibleMap == map.id && (
        <div className="map">
          <img src={map.image} alt="map1" />
        </div>
      )}
      {/* {visibleMap == 2 && (
        <div className="map">
          <img src="public/assets/map2.png" alt="map2" />
        </div>
      )}
      {visibleMap == 3 && (
        <div className="map">
          <img src="public/assets/map3.jpg" alt="map3" />
        </div>
      )} */}

      {mapData.find((item)=>{item.id==visibleMap})}

        

    </div>
  );
};

export default Map;
