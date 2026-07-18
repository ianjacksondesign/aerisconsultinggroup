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
          <Row className="flex-column flex-md-row justify-content-between mb-5">
            <Col>
              <img
                src={aerisLogo}
                alt="Aeris Consulting Group logo"
                height="100"
                width="300"
                className="w-100"
              />
            </Col>
            <Col xs="auto" className="my-3 my-md-0">
              <Nav className="justify-content-center">
                <Row className="flex-column flex-md-row justify-content-center align-items-center align-items-md-start text-center text-md-start g-5">
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Programs</h2>
                      <Nav.Link className="footerNavLink" href="#/programs">
                        Advanced Peer
                        <br />
                        Recovery Specialist
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Company</h2>
                      <Nav.Link
                        className="footerNavLink"
                        href="#/about#aboutus"
                      >
                        About Us
                      </Nav.Link>
                      <Nav.Link
                        className="footerNavLink"
                        href="#/about#mission"
                      >
                        Mission Statement
                      </Nav.Link>
                      <Nav.Link
                        className="footerNavLink"
                        href="#/about#instructors"
                      >
                        Our Instructors
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <h2 className="footerNavHeader">Contact</h2>
                      <Nav.Link
                        className="footerNavLink"
                        href="mailto:admin@masterkey.us"
                      >
                        admin@masterkey.us
                      </Nav.Link>
                      <Nav.Link className="footerNavLink text-white" disabled>
                        P.O. Box 9322
                        <br />
                        Denver, CO 80209
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
                  className="w-50 mb-3 mx-auto"
                />
                <img
                  src={ncprssLogo}
                  alt="National Certified Peer Recovery Support Specialist logo"
                  className="w-50 mx-auto"
                />
              </Stack>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-md-between align-items-center text-white">
            <Col md="auto">
              <Row className="flex-nowrap justify-content-center">
                <Col xs="auto">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="link-primary"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="link-primary"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="link-primary"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.x.com/"
                    target="_blank"
                    className="link-primary"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="link-primary"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col>
              <hr className="my-3" />
            </Col>
            <Col md="auto">
              <p className="footerCopyright text-center">
                Copyright <i className="bi bi-c-circle"></i> 2026 Aeris
                Consulting Group USA
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
