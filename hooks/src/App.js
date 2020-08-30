import React from 'react';
import './App.css';
import { AirportContext } from "./AirportContext";

export default function App() {
  const { airports, removeAirport } = React.useContext(AirportContext);
  return (
    <div className="App">
      <h1>Worst Airports in Europe</h1>
      <ul>
        {airports.map(airport => (
          <li>
            {airport.name}
            <button onClick={() => removeAirport(airport.name)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
