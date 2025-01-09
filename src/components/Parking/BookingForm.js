import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { spotId } = useParams(); // Get the spotId from URL
  const navigate = useNavigate();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Fetch parking spot details based on the spotId (optional for confirmation)
    const fetchSpotDetails = async () => {
      try {
        const response = await axios.get(`/api/parking-spots/${spotId}`);
        // You can use this data for confirmation or pre-filling any other fields
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpotDetails();
  }, [spotId]);

  const handleBooking = async (e) => {
    e.preventDefault();

    try {

      // On successful booking, navigate to a success page or show confirmation
      alert("Booking Successful");
      navigate("/");
    } catch (error) {
      alert("Booking Failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Book Parking Spot</h2>
      <form onSubmit={handleBooking}>
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <label>End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <label>Name:</label>
        <input
          type="text"
          value={userDetails.name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          required
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
