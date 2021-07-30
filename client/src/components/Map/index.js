import React from "react";
import mapimage from "../../../../public/images/genshinmap.jpg";

function Map() {
  return (
    <div>
      <img
        id="map"
        src={mapimage}
        alt="Genshin map"
        width="500"
        height="600"></img>      
    </div>
  );
}

export default Map;

