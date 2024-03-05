import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
