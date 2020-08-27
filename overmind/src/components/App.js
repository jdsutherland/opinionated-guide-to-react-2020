import React from 'react';
import { useOvermind } from '../overmind';

const App = () => {
  const { state } = useOvermind();

  return (
    <>
      <ul>
        {state.terms.map((term, i) => (
          <li>{term}</li>
        ))}
      </ul>
    </>
  )
}

export default App
