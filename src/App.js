import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoutes from "./utiils/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import CarDetails from "./components/CarDetails";
import Newcar from "./components/Newcar";
import ListingForm from "./components/Newcar/ListingForm";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-cars" element={<Newcar title="Listing" />} />
          <Route path="/add-car" element={<ListingForm />} />
          <Route
            path="/popular-cars"
            element={<Newcar title="Popular Cars" />}
          />
          <Route
            path="/newly-cars"
            element={<Newcar title="Newly Launched Cars" />}
          />
          <Route
            path="/upcoming-cars"
            element={<Newcar title="Upcoming Cars" />}
          />
          <Route
            path="/bestsell-cars"
            element={<Newcar title="Best Seller Cars" />}
          />
          <Route
            path="/highrate-cars"
            element={<Newcar title="Top Highly Rated Cars" />}
          />
          <Route path="/car-details" element={<CarDetails title="Listing" />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
