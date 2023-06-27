import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
        <Container>
          <ButtonGroup>
            <Button variant="dark" href="/view">
              View
            </Button>
            <Button variant="dark" href="/create">
              Create
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </Navbar>
  );
}

export default OurNav;
