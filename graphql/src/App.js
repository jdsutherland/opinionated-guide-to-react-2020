import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const PEOPLE = gql`
  query AllPeople {
    all {
      id
      firstName
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(PEOPLE);
  if (loading) return 'loading'
  return (
    <>
      <h1>Random People</h1>
      <ul>
        {data.all.map(person => (
          <li>{person.firstName}</li>
        ))}
      </ul>
    </>
  )
}
