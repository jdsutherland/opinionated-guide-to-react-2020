import React from 'react';
import './App.css';
import AirportContext from "./AirportContext";

export default function App() {
  const airports = React.useContext(AirportContext);
  console.log(airports);
  return (
    <div className="App">
      <h1>Worst Airports in Europe</h1>
      <ul>
        {airports.map(airport => (
          <li>{airport.name}</li>
        ))}
      </ul>
    </div>
  );
}
