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
  const [openId, setOpenId] = useState(null)
  const [info, setInfo] = useState(null)

  const getCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const characters = await data.json();
    return characters.results;
  };

  const getCharacter = async (id) => {
    if (!id) return 

    const data = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const character = await data.json();
    return character;
  };

  useEffect(() => {
    getCharacters().then((rsp) => setCharacters(rsp));
  }, []);

  useEffect(() => {
    getCharacter(openId).then((rsp) => setInfo(rsp));
  }, [openId]);

  return (
    <main className="App">
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            {character.name}
            {openId === character.id && info ? (
              <div>
                <div>Status: {info.status}</div>
                <div>Species: {info.species}</div>
                <div></div>
              </div>
            ): null}
            <button onClick={() => setOpenId(character.id)}>More Info</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
