const Person = {
  name: "Sara",
  city: "Berlin",
  nationality: "Portugal",
};

const PersonContext = React.createContext();

export default function App() {
  return (
    <PersonContext.Provider value={Person}>
      <>
        <Header />
        <Main />
      </>
    </PersonContext.Provider>
  );
};

const Header = () => {
  const person = useContext(PersonContext);
  return <p>Hello {person.name}</p>;
};

const Main = () => {
  const person = useContext(PersonContext);
  return (
    <p>
      I see with you are from {person.nationality} and live in {person.city}
    </p>
  );
};
