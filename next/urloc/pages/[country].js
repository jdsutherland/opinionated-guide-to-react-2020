import axios from "axios";

export async function getServerSideProps({ query }) {
  const { data } = await axios(
    `https://restcountries.eu/rest/v2/name/${query.country}`
  );

  return {
    props: {
      countryData: data
    }
  };
}

export default function CountryPage({ countryData }) {
  return <pre>{JSON.stringify(countryData, null, 2)}</pre>;
}
