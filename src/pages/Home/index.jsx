// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
// Assets
import cpfsLogo from "/src/assets/images/cpfs.png";
import ncprssLogo from "/src/assets/images/ncprss.png";
import kalaSederstromHeadshot from "/src/assets/images/kala-sederstrom.jpg";
import samFeaginHeadshot from "/src/assets/images/sam-feagin.jpg";
import kelseyGorskiHeadshot from "/src/assets/images/kelsey-gorski.jpg";

export default function Home() {
  return (
    <>
      <section id="homeHero">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="justify-content-center text-md-center">
            <Col lg="auto">
              <p className="prehead">
                Built from Experience. Designed for Practice.
              </p>
              <h1>
                Developing the Professionals who
                <br />
                <em className="text-primary">Change Communities</em>
              </h1>
              <p className="fs-5 mb-4 mx-md-auto">
                Programs created by professionals who understand recovery is
                shaped through <br className="d-none d-md-block" />
                <strong>
                  lived experience with addiction, incarceration, trauma,
                  behavioral health challenges,{" "}
                  <br className="d-none d-lg-block" />
                  homelessness, reentry, and the long process of rebuilding
                  meaningful lives.
                </strong>
              </p>
              <Row className="justify-content-center">
                <Col md="auto">
                  <Button
                    as="a"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScVrmdtJWfVt5fHXNb48BckDf6E8YxA3FyDwFxzATxGExJTLg/viewform"
                    variant="primary"
                    className="mb-3 mb-md-0"
                  >
                    Become a Peer Support Specialist
                  </Button>
                </Col>
                <Col md="auto">
                  <Button as="a" href="#/programs" variant="outline-light">
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeAffiliation">
        <Container className="py-5">
          <p className="prehead text-center text-dark mb-3">Trusted by</p>
          <Row className="justify-content-center align-items-center">
            <Col xs={8} lg={3}>
              <img
                src={cpfsLogo}
                alt="Colorado Peer and Family Specialist logo"
                className="w-100 mb-3 mb-lg-0"
              />
            </Col>
            <Col xs={8} lg={3}>
              <img
                src={ncprssLogo}
                alt="National Certified Peer Recovery Support Specialist logo"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeWhatWeDo">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row>
            <Col lg={6} className="pe-5">
              <p className="prehead">What We Do</p>
              <h2>
                Bridging the Gap Between Certification and Real-World Excellence
              </h2>
              <p className="mb-4">
                Masterkey was created by professionals who understand recovery
                is shaped through{" "}
                <strong>
                  lived experience with addiction, incarceration, trauma,
                  behavioral health challenges, homelessness, reentry, and the
                  long process of rebuilding meaningful lives.
                </strong>
              </p>
              <Button as="a" href="#/programs" variant="outline-dark">
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeGetCertified">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <p className="prehead">Get Certified</p>
              <h2>
                Designed to Help Participants Become{" "}
                <em>Dependable Professionals</em>{" "}
              </h2>
              <p className="mb-4 fs-5">
                In our programs, participants do not simply discuss skills—they{" "}
                <em className="text-primary">practice</em> how to use them when
                situations are complex, emotional, charged, and time-sensitive.
              </p>
              <Button as="a" variant="primary">
                View Program Information
              </Button>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                <Col sm={6}>
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
                <Col sm={6}>
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
                <Col sm={6}>
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
                <Col sm={6}>
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
      <section id="homeTestimonials" className="testimonials">
        <Container className="py-5 py-lg-6">
          <Row className="justify-content-between align-items-center">
            <Col md={5}>
              <p className="prehead">Testimonials</p>
              <h2>Hear From Our Recent Graduates</h2>
            </Col>
            <Col md={7}>
              <Carousel className="testimonialSlider">
                <Carousel.Item className="h-100">
                  <Row>
                    <Col lg={3}>
                      <Image
                        src={kalaSederstromHeadshot}
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
                        Through these classes, I gained a deeper understanding
                        of the importance of identifying and accessing
                        appropriate resources to support individuals in a
                        variety of situations. I also developed greater
                        confidence in being authentic and sharing my personal
                        growth while learning alongside like-minded peers.
                      </p>
                      <p className="testimonialName">Kala Sederstrom</p>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item className="h-100">
                  <Row>
                    <Col lg={3}>
                      <Image
                        src={samFeaginHeadshot}
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
                        Not only did this training prepare me to better help
                        others in recovery, but it also strengthened my own
                        recovery journey in ways I never expected. The
                        knowledge, skills, and connections I gained through this
                        program have been life-changing.
                      </p>
                      <p className="testimonialName">Sam Feagin</p>
                    </Col>
                  </Row>
                </Carousel.Item>
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
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeNextSteps" className="nextSteps">
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
