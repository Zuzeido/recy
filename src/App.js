//import Model3D from "./components/model3D";
import Navbar from "./components/Navbar/Navbar";
import Snowfall from "react-snowfall";

function App() {
  return (
    <>
        <Snowfall
        style={{
          zIndex: "-1",
        }}
        color="red"
        snowflakeCount={90}
        radius={[0.5, 0.5]}
      />
      <Navbar style={{"z-index": "9999"}}/>
      
    </>
  );
}

export default App;
