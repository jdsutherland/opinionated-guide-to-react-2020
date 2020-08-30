import React, { useState, createContext } from 'react'
import airportList from "./data";

export const AirportContext = createContext(null);

export default ({ children }) => {
  const [airports, setAirports] = useState(airportList);

  const store = {
    airports: airports,
    removeAirport: (name) =>
      setAirports((a) => a.filter((airport) => airport.name !== name)),
  };

  return (
    <AirportContext.Provider value={store}>{children}</AirportContext.Provider>
  );
};
