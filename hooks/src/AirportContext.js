import React, { useReducer, createContext } from 'react'
import airports from "./data";

export const AirportContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleVisited':
      return {
        airports: state.airports.map(airport => {
          return (airport.id === action.value)
            ? {...airport, visited: !airport.visited}
            : airport;
        })
      }
    default:
      return state
  }
};

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {airports});

  return (
    <AirportContext.Provider value={{ state, dispatch }}>
      {children}
    </AirportContext.Provider>
  );
};
