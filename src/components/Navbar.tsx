import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface props {
  onButtonClick: () => void;
}

function OurNav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://i.ibb.co/SBwRNxq/00166-2450960517-white-background-removebg-preview-min.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          OC Manager
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default OurNav;
