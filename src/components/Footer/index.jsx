import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import aerisLogo from "/src/assets/logos/aeris-group-logo.svg";
import cpfsLogo from "/src/assets/images/cpfs.png";
import ncprssLogo from "/src/assets/images/ncprss.png";

export default function Footer() {
  return (
    <>
      <footer>
        <Container fluid="xl" className="pt-5 pt-lg-6 pb-3">
          <Row className="justify-content-between mb-5">
            <Col>
              <img
                src={aerisLogo}
                alt="Aeris Consulting Group logo"
                height="100"
                width="300"
              />
            </Col>
            <Col md="auto">
              <Nav>
                <Row>
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Programs</h2>
                      <Nav.Link className="footerNavLink">
                        Advanced Peer Recovery Specialist
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Company</h2>
                      <Nav.Link className="footerNavLink">About Us</Nav.Link>
                      <Nav.Link className="footerNavLink">
                        Mission Statement
                      </Nav.Link>
                      <Nav.Link className="footerNavLink">
                        Our Instructors
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Contact</h2>
                      <Nav.Link className="footerNavLink">Address</Nav.Link>
                      <Nav.Link className="footerNavLink">
                        Email Address
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Col>
            <Col>
              <Stack>
                <img
                  src={cpfsLogo}
                  alt="Colorado Peer and Family Specialist logo"
                  className="w-50 mb-3"
                />
                <img
                  src={ncprssLogo}
                  alt="National Certified Peer Recovery Support Specialist logo"
                  className="w-50"
                />
              </Stack>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center text-white">
            <Col xs="auto">
              <p className="footerCopyright">
                Copyright <i className="bi bi-c-circle"></i> 2026 Aeris
                Consulting Group USA
              </p>
            </Col>
            <Col>
              <hr className="m-0" />
            </Col>
            <Col xs="auto">
              <Row>
                <Col md="auto">
                  <i className="bi bi-facebook"></i>
                </Col>
                <Col md="auto">
                  <i className="bi bi-instagram"></i>
                </Col>
                <Col md="auto">
                  <i className="bi bi-linkedin"></i>
                </Col>
                <Col md="auto">
                  <i className="bi bi-twitter-x"></i>
                </Col>
                <Col md="auto">
                  <i className="bi bi-youtube"></i>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
