import Link from "next/link";
import axios from "axios";

export async function getServerSideProps({ req }) {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;

  const { data } = await axios(`http://ip-api.com/json/${ip}`);

  return {
    props: {
      location: data
    }
  };
}

export default function IndexPage({ location }) {
  return (
    <div>
      <p>Hello User from {location.country} </p>
      <Link href={`/${location.country}`}>
        <a>{location.country} Page</a>
      </Link>
      <style jsx>{`
        p,
        a {
          font-family: sans-serif;
          font-family: 18px;
          color: papayawhip;
          display: block;
        }
        div {
          background: black;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
