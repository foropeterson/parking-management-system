import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        vehicle_details: vehicleDetails,
      });
      alert("Registration Successful");
      console.log(response.data);
    } catch (error) {
      alert("Registration Failed");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label>Vehicle Details:</label>
      <input
        type="text"
        value={vehicleDetails}
        onChange={(e) => setVehicleDetails(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
