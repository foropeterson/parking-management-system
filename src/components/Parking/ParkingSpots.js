import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ParkingSpots = () => {
  const [spots, setSpots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get("/api/parking-spots");
        setSpots(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpots();
  }, []);

  // Handle booking a spot
  const handleBooking = (spotId) => {
    navigate(`/book/${spotId}`);
  };

  return (
    <div>
      <h2>Available Parking Spots</h2>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>
            Spot #{spot.spot_number} - {spot.vehicle_type} -{" "}
            {spot.is_available ? (
              <span>
                Available
                <button onClick={() => handleBooking(spot.id)}>Book Now</button>
              </span>
            ) : (
              <span>Occupied</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingSpots;
