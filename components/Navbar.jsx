import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container">
        <Link href="/">
          <a className="navbar-brand">SuperHero Identity</a>
        </Link>
        <Link href="/add">
          <MDBBtn> + Create New</MDBBtn>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
