import React, { useState } from 'react'
import { useOvermind } from '../overmind';

const App = () => {
  const {
    state,
    actions: { addTerm, removeTerm },
  } = useOvermind();
  const [term, setTerm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    addTerm(term);
    setTerm('');
  };

  return (
    <>
      <h1>Add a term</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={event => setTerm(event.target.value)}
        />
        <button type="submit" disabled={!term}>
          Add
        </button>
      </form>
      <h1>Terms</h1>
      <ul>
        {state.terms.map((term, i) => (
          <li>
            {term} - <button onClick={() => removeTerm(i)}>x</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
