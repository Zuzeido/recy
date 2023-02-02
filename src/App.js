//import Model3D from "./components/model3D";
import { Rose } from "./components";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar/Navbar";
import Snowfall from "react-snowfall";
import Portada from './components/portada'
import Video from './components/video' 

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
      <Navbar />
      <Rose />
      <Portada />
      <Video />
      <Contacto />
      
    </>
  );
}

export default App;
