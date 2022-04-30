import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// tostify
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
import Topnavbar from "./Components/Topnavbar/Topnavbar";
import Authentication from "./Pages/Authentication/Authentication";

function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="authentication/:state"
          element={<Authentication />}
        ></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
