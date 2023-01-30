//import Model3D from "./components/model3D";
import { Rose } from "./components";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Rose />
      <Contacto />
      <div id="container"></div>
    </>
  );
}

export default App;
