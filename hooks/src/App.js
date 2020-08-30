import React from 'react';
import './App.css';
import { AirportContext } from "./AirportContext";

export default function App() {
  const { state, dispatch } = React.useContext(AirportContext);
  return (
    <div className="App">
      <h1>Worst Airports in Europe</h1>
      <ul>
        {state.airports.map(airport => (
          <li key={airport.name}>
            {airport.name}
            {airport.visited ? (
              <button
                onClick={() => dispatch({ type: 'toggleVisited', value: airport.id })}>
                <span role="img" aria-label="remove visited">
                  ❌
                </span>
              </button>
            ): (
              <button onClick={() => dispatch({ type: 'toggleVisited', value: airport.id })}>
                <span role="img" aria-label="visited">
                  ✅
                </span>
              </button>
            )}
            <img width='300' src={airport.photo} alt={airport.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
