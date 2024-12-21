import React, { useState } from "react";
import { API } from "aws-amplify";

function BookingForm() {
  const [flightId, setFlightId] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const bookFlight = async () => {
    try {
      await API.post("airlineAPI", "/bookings", {
        body: { flightId, passengerName },
      });
      alert("Flight booked successfully!");
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

  return (
    <div>
      <h2>Book a Flight</h2>
      <input
        type="text"
        value={flightId}
        onChange={(e) => setFlightId(e.target.value)}
        placeholder="Flight ID"
      />
      <input
        type="text"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
        placeholder="Passenger Name"
      />
      <button onClick={bookFlight}>Book</button>
    </div>
  );
}

export default BookingForm;
