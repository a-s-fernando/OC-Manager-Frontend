import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <Row className="">
        <Col className="col-md-8 mx-auto mt-5">
          <div id="error-page">
            <Alert variant="dark">
              <Alert.Heading>Oops!</Alert.Heading>
              <p>Sorry, an unexpected error has occurred.</p>
              <hr />
              {isRouteErrorResponse(error) && <p>{error.statusText}</p>}
            </Alert>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
