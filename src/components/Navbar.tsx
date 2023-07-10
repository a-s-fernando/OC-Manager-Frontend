import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function OurNav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <img
          alt=""
          src="https://i.ibb.co/SBwRNxq/00166-2450960517-white-background-removebg-preview-min.png"
          width="38"
          height="38"
          className="d-inline-block align-top"
          href="/"
        />
        <Navbar.Brand href="/" className="mx-3">
          {" "}
          OC Manager
        </Navbar.Brand>
        <Container className="p-0">
          <ButtonGroup>
            <Button variant="dark" href="/view">
              View
            </Button>
            <Button variant="dark" href="/create">
              Create
            </Button>
            <Button variant="dark" href="/settings">
              Settings
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </Navbar>
  );
}

export default OurNav;
