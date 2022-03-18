import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
// axios
import Axios from "axios";
// Router
import Router, { useRouter } from "next/router";
// React
import { useState } from "react";

const EditHero = ({ hero }) => {
  const router = useRouter();

  const heroId = router.query.id;

  const [formIn, setFormIn] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const handleChange = (e) => {
    setFormIn({
      ...formIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await Axios(`http://127.0.0.1:3000/api/hero/${heroId}`, {
        method: `PUT`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formIn),
      });

      Router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="display-4 text-center text-primary my-3">
          Add a New Hero Identity
        </h1>
        <form onSubmit={handleForm}>
          <MDBInput
            type="text"
            onChange={handleChange}
            label="SuperHero"
            name="superHero"
            value={formIn.superHero}
          />
          <MDBInput
            type="text"
            onChange={handleChange}
            label="RealName"
            name="realName"
            className="my-3"
            value={formIn.realName}
          />
          <MDBBtn>EDIT SUPERHERO</MDBBtn>
        </form>
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

export default EditHero;
