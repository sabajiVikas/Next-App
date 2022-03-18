import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
// axios
import Axios from "axios";
// Router
import Router from "next/router";
// React
import { useState } from "react";

const CreateHero = () => {
  const [formIn, setFormIn] = useState({
    superHero: "",
    realName: "",
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
      await Axios(`http://127.0.0.1:3000/api/hero`, {
        method: `POST`,
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
          />
          <MDBInput
            type="text"
            onChange={handleChange}
            label="RealName"
            name="realName"
            className="my-3"
          />
          <MDBBtn>ADD SUPERHERO</MDBBtn>
        </form>
      </div>
    </>
  );
};

export default CreateHero;
