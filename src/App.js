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
import Inventory from "./Pages/Inventory/Inventory";
import RequireAuth from "./Pages/Authentication/RequirAuth/RequireAuth";
import CustomFooter from "./Components/CustomFooter/CustomFooter";
import AddItem from "./Pages/AddItem/AddItem";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
import ResendEmail from "./Pages/Authentication/ResendEmail/ResendEmail";

function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>

        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route
          path="authentication/:state"
          element={<Authentication />}
        ></Route>

        <Route path="inventory" element={<Inventory />}></Route>
        <Route
          path="addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="manageInventory/:id"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="editInventory"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>

        <Route path="/resendEmail" element={<ResendEmail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <CustomFooter />
      <ToastContainer />
    </div>
  );
}

export default App;
