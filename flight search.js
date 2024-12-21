import React, { useState } from "react";
import { API } from "aws-amplify";

function FlightSearch() {
  const [destination, setDestination] = useState("");
  const [flights, setFlights] = useState([]);

  const searchFlights = async () => {
    try {
      const response = await API.get("airlineAPI", `/flights?destination=${destination}`);
      setFlights(response);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  return (
    <div>
      <h2>Search Flights</h2>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={searchFlights}>Search</button>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.destination} - ${flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightSearch;
