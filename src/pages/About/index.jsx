import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router";
// Assets
import forestHeadshot from "/src/assets/images/forest-mangus.png";
import jdHeadshot from "/src/assets/images/jd-kirkness.png";
import nathanHeadshot from "/src/assets/images/nathan-finnegan.png";

export default function About() {
  return (
    <>
      <section id="aboutTeam">
        <Container className="py-5 py-lg-6">
          <h2 className="text-center mb-5">Meet the Team</h2>
          <Row>
            <Col lg={4}>
              <div className="d-flex flex-column justify-content-center text-center">
                <img
                  src={forestHeadshot}
                  alt="Headshot of Forest Mangus"
                  className="rounded-circle bg-primary-subtle mb-3"
                />
                <h3 className="mb-1">Forest Mangus</h3>
                <p>Director of Operations</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex flex-column justify-content-center text-center">
                <img
                  src={jdHeadshot}
                  alt="Headshot of JD Kirkness"
                  className="rounded-circle bg-primary-subtle mb-3"
                />
                <h3 className="mb-1">JD Kirkness</h3>
                <p>Director of Training and Development</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex flex-column justify-content-center text-center">
                <img
                  src={nathanHeadshot}
                  alt="Headshot of Nathan Finnegan"
                  className="rounded-circle bg-primary-subtle mb-3"
                />
                <h3 className="mb-1">Nathan Finnegan</h3>
                <p>Masterkey Certified Instructor</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
