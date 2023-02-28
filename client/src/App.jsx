import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Login from "./Pages/Login/Login";
import Home from './Pages/Home/Home.jsx';
import SignUp from "./Pages/SignUp/SignUp";

function App() {

  return (
    <div className="App">
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path={"/"} element={<Home /> } />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/signup"} element={<SignUp />} />
      </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  )
}

export default App
