import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Link } from "react-router";
// Assets
import forestHeadshot from "/src/assets/images/forest-mangus.png";
import jdHeadshot from "/src/assets/images/jd-kirkness.png";
import nathanHeadshot from "/src/assets/images/nathan-finnegan.png";
import bettyApplehans from "/src/assets/images/betty-applehans.jpg";
import kimTudorHeadshot from "/src/assets/images/kim-tudor.jpg";
import kelseyGorskiHeadshot from "/src/assets/images/kelsey-gorski.jpg";

export default function About() {
  return (
    <>
      <section id="aboutHero">
        <Container fluid="xl">
          <p className="prehead">Aeris Consulting Group • Chartered 2023</p>
          <h1>
            Human Life is Infinitely Valuable,
            <br />
            <em>Without Exception</em>
          </h1>
          <p className="fs-5">
            A Colorado-chartered professional development company
            <br />
            building the credentialed workforce behind
            <br />
            recovery, crisis response, and community advocacy.
          </p>
        </Container>
      </section>
      <section id="aboutWhatWeDo">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row>
            <Col lg={6}>
              <p className="prehead">What We Do</p>
              <h2>Training the Next Generation of Peer Recovery Specialist</h2>
              <p className="w-75 mb-4">
                To create a platform where ambition and personal drive sustain
                the lifelong pursuit of both personal and professional
                development in all aspects of life, through many pathways.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="aboutMission">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="justify-content-center">
            <Col lg={5}>
              <h2 className="prehead">Our Mission</h2>
              <p className="h2">
                To unlock the <em className="text-primary">true</em>, and often
                unrealized potential of human life.
              </p>
            </Col>
            <Col lg={1}>
              <div className="d-flex justify-content-center align-items-stretch h-100">
                <div className="vr text-primary"></div>
              </div>
            </Col>
            <Col lg={5}>
              <div>
                <h2 className="prehead">Our Vision</h2>
                <p className="h2">
                  To create a platform where ambition and personal drive sustain
                  the <em className="text-primary">lifelong pursuit</em> of both
                  personal and professional development in all aspects of life,
                  through many pathways.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="aboutTeam">
        <Container className="py-5 py-lg-6">
          <p className="prehead">Our Leadership</p>
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
      <section id="aboutByTheNumbers">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="prehead">By the Numbers</h2>
              <p className="h2">
                Outcomes from our
                <br />
                Advanced Peer Recovery Specialist Program
              </p>
              <p className="mb-4 fs-5">
                Results from the 2025–2026 program year,
                <br />
                drawn from 225 participant evaluations.
              </p>
              <Button as="a" variant="primary">
                View Program
              </Button>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                <Col lg={6}>
                  <Card className="statCard">
                    <h3>
                      <span className="statCardNumber">340</span>
                      <br />
                      <span className="statCardSubHead">
                        Professionals Trained
                      </span>
                    </h3>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="statCard">
                    <h3>
                      <span className="statCardNumber">332</span>
                      <br />
                      <span className="statCardSubHead">
                        Certified Professional
                      </span>
                    </h3>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="statCard">
                    <h3>
                      <span className="statCardNumber">97.6%</span>
                      <br />
                      <span className="statCardSubHead">
                        Certification Success
                      </span>
                    </h3>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="statCard">
                    <h3>
                      <span className="statCardNumber">4.8/5</span>
                      <br />
                      <span className="statCardSubHead">
                        Average Satisfaction
                      </span>
                    </h3>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="aboutTestimonials" className="testimonials">
        <Container className="py-5 py-lg-6">
          <Row className="justify-content-between align-items-center">
            <Col lg={4}>
              <p className="prehead">Testimonials</p>
              <h2>Hear From Our Recent Graduates</h2>
            </Col>
            <Col lg={7}>
              <Carousel className="testimonialSlider">
                <Carousel.Item className="h-100">
                  <Row>
                    <Col lg={3}>
                      <Image
                        src={kelseyGorskiHeadshot}
                        roundedCircle
                        className="w-100"
                      />
                    </Col>
                    <Col lg={9}>
                      <div className="mb-3">
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                      </div>
                      <p className="testimonialText">
                        Through this program, I have gained valuable knowledge,
                        confidence, and communication skills that have
                        strengthened my ability to serve as a future
                        Professional Peer Specialist. I am passionate about
                        helping others and saving lives, and this training has
                        reinforced that commitment.
                      </p>
                      <p className="testimonialName">Kelsey Gorski</p>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item className="h-100">
                  <Row>
                    <Col lg={3}>
                      <Image
                        src={bettyApplehans}
                        roundedCircle
                        className="w-100"
                      />
                    </Col>
                    <Col lg={9}>
                      <div className="mb-3">
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                      </div>
                      <p className="testimonialText">
                        The education, guidance, and encouragement I received
                        through the program helped me build the confidence,
                        knowledge, and skills necessary to reach goals that once
                        seemed out of reach.
                      </p>
                      <p className="testimonialName">Betty Applehans</p>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item className="h-100">
                  <Row>
                    <Col lg={3}>
                      <Image
                        src={kimTudorHeadshot}
                        roundedCircle
                        className="w-100"
                      />
                    </Col>
                    <Col lg={9}>
                      <div className="mb-3">
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                        <i className="bi bi-star-fill testimonialStars"></i>
                      </div>
                      <p className="testimonialText">
                        I would like to take the time to send my appreciation to
                        JD Kirkness and the whole crew for time and knowledge
                        that shared with countless other individuals and myself
                        towards our own personal growth and our professional
                        futures.
                      </p>
                      <p className="testimonialName">Kim Tudor</p>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="aboutNextSteps" className="nextSteps">
        <Container fluid="xl" className="text-center text-white py-5">
          <h2 className="mb-4">Ready to Take Your Next Steps?</h2>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLScVrmdtJWfVt5fHXNb48BckDf6E8YxA3FyDwFxzATxGExJTLg/viewform"
            target="_blank"
          >
            Become a Peer Support Specialist
          </Button>
        </Container>
      </section>
    </>
  );
}
