import React from "react";
import Rose from "./rose/Rose"
function Inicio() {
  return (
    <>     
    <Rose />
     <div style={{
      marginTop: "0.2rem",
      marginBottom: "2rem",
      display: "flex",
      "flex-wrap": "nowrap",
      "justify-content": "center"
      }}>
    <iframe 
    width="90%" 
    height="315" 
    src="https://www.youtube.com/embed/V4AAOJfnVY0?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    </div>
    </>

  );
}

export default Inicio;
