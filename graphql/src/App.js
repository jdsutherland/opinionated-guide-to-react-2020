import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const PEOPLE = gql`
  query AllPeople {
    all {
      id
      firstName
    }
  }
`;

const ADD_PERSON = gql`
  mutation newPerson($firstName: String) {
    add(firstName: $firstName) {
      id
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(PEOPLE);
  const [AddPersonMutation, { loading: loadingMutation }] = useMutation(ADD_PERSON);
  const [name, setName] = useState('')

  const addPerson = (e) => {
    e.preventDefault();
    AddPersonMutation({
      variables: {
        firstName: name,
      },
    })
    setName('');
  };

  if (loading) return 'loading'
  return (
    <div>
      <h1>Add a person</h1>
      <form onSubmit={addPerson}>
        <input
          required
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <button type="submit">{loadingMutation ? 'Loading' : 'Add'}</button>
      </form>
      <h1>Random People</h1>
      <ul>
        {data.all.map(person => (
          <li>{person.firstName}</li>
        ))}
      </ul>
    </div>
  )
}
