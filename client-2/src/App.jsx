import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./Pages/Login/Login";
import Home from './Pages/Home/Home.jsx';
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
