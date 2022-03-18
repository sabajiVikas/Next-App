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
// Router
import Router, { useRouter } from "next/router";

const UniHero = ({ hero }) => {
  const router = useRouter();

  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      await Axios(`http://127.0.0.1:3000/api/hero/${heroId}`, {
        method: `DELETE`,
      });

      Router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="display-4 text-center text-primary my-3">
          Identity of SuperHero
        </h1>
        <div>
          <MDBCard
            className="border border-2 border-primary mb-3"
            style={{ maxWidth: "22rem" }}
            key={hero?._id}
          >
            <MDBCardBody>
              <MDBCardTitle>{hero?.superHero}</MDBCardTitle>
              <MDBCardText className="text-primary">
                {hero?.realName}
              </MDBCardText>
              <Link href={`/`}>
                <MDBBtn onClick={deleteHero} className="btn btn-danger">
                  Delete Hero
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await Axios(`http://127.0.0.1:3000/api/hero/${id}`);
  // console.log(response.data.hero);

  return {
    props: {
      hero: response.data.hero,
    },
  };
};

export default UniHero;
