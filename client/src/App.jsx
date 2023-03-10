import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./Pages/Login/Login";
import Home from './Pages/Home/Home.jsx';
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import mapboxgl from "mapbox-gl";
import Product from "./Pages/Product/Product";
import CreateAdmin from "./Pages/SignUp/CreateAdmin";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

function App() {
  
  return (    
    <div className="App">
      <img src="https://st.depositphotos.com/2885805/4560/v/950/depositphotos_45603303-stock-illustration-logistic-icons-set.jpg" className="absolute -z-10 h-screen w-screen mt-24" alt="backgroud" />
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Home /> } />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/profile"} element={<Profile />} />
        <Route exact path={"/product"} element={<Product />} />
        <Route exact path={"/create-admin"} element={<CreateAdmin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
