import React, { useEffect, useState } from "react";
import './App.css';

const Name = ({ name }) => {
  useEffect(() => {
    console.log("name changed");
  }, [name]);

  return <h1> Hello {name}</h1>;
};

export default function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const characters = await data.json();
    return characters.results;
  };

  useEffect(() => {
    getCharacters().then((rsp) => setCharacters(rsp));
  }, []);

  return (
    <main className="App">
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            {character.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
