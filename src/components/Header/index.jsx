import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import aerisLogo from "/src/assets/logos/aeris-group-logo.svg";

export default function Header() {
  return (
    <>
      <header className="bg-dark sticky-top border-bottom border-primary border-3 shadow-sm">
        <Container fluid="xxl">
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand href="#/" preventScrollReset={true}>
              <img
                src={aerisLogo}
                alt="Aeris Consulting Group logo"
                height="100"
                width="200"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav activeKey={location.pathname} className="ms-auto">
                <Nav.Link
                  eventKey="#/"
                  href="#/"
                  className="me-4"
                  preventScrollReset={true}
                >
                  Home
                </Nav.Link>
                <NavDropdown title="Programs" className="me-4">
                  <NavDropdown.Item
                    href="#/programs"
                    eventKey="programs"
                    preventScrollReset={true}
                  >
                    Masterkey Professional (APRS)
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  eventKey="about"
                  href="#/about"
                  className="me-4"
                  preventScrollReset={true}
                >
                  About Us
                </Nav.Link>
                <Button
                  as="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScVrmdtJWfVt5fHXNb48BckDf6E8YxA3FyDwFxzATxGExJTLg/viewform"
                  target="_blank"
                  variant="primary"
                  preventScrollReset={true}
                >
                  Become a Peer Support Specialist
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
