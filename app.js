import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import FlightSearch from "./components/FlightSearch";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Airline Booking</h1>
      </header>
      <FlightSearch />
      <BookingForm />
      <BookingList />
    </div>
  );
}

export default withAuthenticator(App);
