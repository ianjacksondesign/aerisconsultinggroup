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
import forestHeadshot from "/src/assets/images/forest-mangus.png";
import jdHeadshot from "/src/assets/images/jd-kirkness.png";
import nathanHeadshot from "/src/assets/images/nathan-finnegan.png";
import kalaSederstromHeadshot from "/src/assets/images/kala-sederstrom.jpg";
import samFeaginHeadshot from "/src/assets/images/sam-feagin.jpg";
import kelseyGorskiHeadshot from "/src/assets/images/kelsey-gorski.jpg";

export default function Home() {
  return (
    <>
      <section id="homeHero">
        <Container fluid="xl">
          <Row>
            <Col lg={6}>
              <h1>
                Help Others by
                <br />
                Sharing <em>Your</em> Story
              </h1>
              <p className="mb-4">
                Your experience matters. Become a Peer Support Professional
                <br />
                today to share your story and start helping others.
              </p>
              <Row>
                <Col lg="auto">
                  <Button
                    as="a"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScVrmdtJWfVt5fHXNb48BckDf6E8YxA3FyDwFxzATxGExJTLg/viewform"
                    variant="primary"
                  >
                    Become a Peer Support Specialist
                  </Button>
                </Col>
                <Col lg="auto">
                  <Button as="a" href="/" variant="outline-light">
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
          <Row className="justify-content-center align-items-center">
            <Col lg={3}>
              <img
                src={cpfsLogo}
                alt="Colorado Peer and Family Specialist logo"
                className="w-100"
              />
            </Col>
            <Col lg={3}>
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
            <Col lg={6}>
              <p className="prehead">What We Do</p>
              <h2>Training the Next Generation of Peer Recovery Specialist</h2>
              <p className="w-75 mb-4">
                To create a platform where ambition and personal drive sustain
                the lifelong pursuit of both personal and professional
                development in all aspects of life, through many pathways.
              </p>
              <Button as="a" variant="primary">
                Learn More About Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeGetCertified">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="align-items-center">
            <Col lg={6}>
              <p className="prehead">Get Certified</p>
              <h2>Unlock Your Potential with Masterkey Professional</h2>
              <p className="mb-4">
                Promoting the true, unharnessed potential of human capacity
                through the realization of all human life as a potential
                resource. The lifelong development of purpose, identity and
                skill both on personal and professional terms is the absolute
                benchmark of the organization. The only outcome necessary is
                that of individually defined sustainability.
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
                      <span className="statCardNumber">332</span>
                      <br />
                      <span className="statCardSubHead">
                        Certified Professional
                      </span>
                    </h3>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="homeTestimonials">
        <Container className="py-5 py-lg-6">
          <Row className="justify-content-between align-items-center">
            <Col lg={4}>
              <p className="prehead">Testimonials</p>
              <h2>Hear From Our Recent Graduates</h2>
            </Col>
            <Col lg={7}>
              <Carousel className="testimonialSlider">
                <Carousel.Item>
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
                <Carousel.Item>
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
                <Carousel.Item>
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
      <section id="homeNextSteps">
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
