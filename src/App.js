import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Login from "./components/Login";
import Register from "./components/Register";
// import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Sidebar />} /> */}
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
