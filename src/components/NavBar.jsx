import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand href="/">For U</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">ForU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                <Nav.Link as={HashLink} to="/#home">
                  Home
                </Nav.Link>
                <Nav.Link as={HashLink} to="/#courses">
                  Courses
                </Nav.Link>
                <Nav.Link as={HashLink} to="/#portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link as={HashLink} to="/#about">
                  About
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
