import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await API.get("airlineAPI", "/bookings");
        setBookings(response);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.passengerName} - Flight: {booking.flightId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
