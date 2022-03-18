// NextJS(Framework) Rules & Ways to Work With(Work Flow)
// MDB
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
// axios
import Axios from "axios";
// Next
import Link from "next/link";

// Default Page
const Home = ({ heros }) => {
  return (
    <>
      <div className="container">
        <h1 className="display-4 text-center text-primary my-3">
          SuperHero Identity Manager
        </h1>
        <div>
          {heros?.map((hero) => (
            <MDBCard
              className="border border-2 border-primary mb-3"
              style={{ maxWidth: "22rem" }}
              key={hero._id}
            >
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link href={`/${hero._id}`}>
                  <MDBBtn className="me-3">View Hero</MDBBtn>
                </Link>
                <Link href={`/${hero._id}/edit`}>
                  <MDBBtn>Edit Hero</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>
    </>
  );
};

// // Older One
// Home.getInitialProps = async () => {
//   const response = await Axios("http://127.0.0.1:3000/api/hero");
//   console.log(response.data.hero);

//   return {};
// };

export const getServerSideProps = async () => {
  const response = await Axios(
    "https://next-app-e5xwm22x4-sabajivikas.vercel.app/hero"
  );
  // console.log(response.data.hero);

  return {
    props: {
      heros: response.data.hero,
    },
  };
};

export default Home;
