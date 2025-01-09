import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ParkingSpots from "./components/Parking/ParkingSpots";
import BookingForm from "./components/Parking/BookingForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParkingSpots />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
