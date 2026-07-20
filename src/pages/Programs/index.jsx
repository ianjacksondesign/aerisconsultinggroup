import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// Assets
import tristarWhiteLogo from "/src/assets/logos/tristar-white.svg";
import kalaSederstromHeadshot from "/src/assets/images/kala-sederstrom.jpg";
import samFeaginHeadshot from "/src/assets/images/sam-feagin.jpg";
import kelseyGorskiHeadshot from "/src/assets/images/kelsey-gorski.jpg";

export default function Programs() {
  return (
    <>
      <section id="programsHero">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="justify-content-center text-center">
            <Col lg="auto">
              <img src={tristarWhiteLogo} alt="" width="50" height="50" />
              <h1>Masterkey Professional</h1>
              <p className="fs-5">Advanced Peer Recovery Specialist Program</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsAbout">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="flex-column justify-content-between align-items-center g-5">
            <Col lg={8} className="text-md-center">
              <p className="prehead">The Program</p>
              <h2>
                70 Hours Built to Bridge
                <br />
                Certification and Field Readiness
              </h2>
              <p className="fs-5">
                Our Avanced Peer Recovery Specialist (APRS) program is designed
                to help participants become dependable professionals who can
                translate lived experience into{" "}
                <strong>safe, ethical, and effective service</strong>.
              </p>
            </Col>
            <Col>
              <Row className="justify-content-center align-items-stretch g-3">
                <Col sm={6} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-patch-check"></i>
                    <h3>COPA Approved</h3>
                    <p>
                      A Colorado Providers Association-approved peer recovery
                      curriculum.
                    </p>
                  </Card>
                </Col>
                <Col sm={6} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-star"></i>
                    <h3>Nationally Recognition</h3>
                    <p>
                      Recognized by NAADAC in connection with the National
                      Certified Peer Recovery Support Specialist Certification.
                    </p>
                  </Card>
                </Col>
                <Col sm={6} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-people"></i>
                    <h3>Lived Experience</h3>
                    <p>
                      Developed and taught by peer professionals who know the
                      work personally and professionally.
                    </p>
                  </Card>
                </Col>
                <Col sm={6} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-file-earmark-medical"></i>
                    <h3>Scenario-Based</h3>
                    <p>
                      Real-life situations, guided practice, facilitated
                      reflection, and applied problem-solving.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsByTheNumbers">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="flex-column justify-content-between align-items-center g-lg-5">
            <Col lg={8} className="text-md-center">
              <h2 className="prehead">By the Numbers</h2>
              <p className="h2">
                Outcomes from our Advanced Peer Recovery Specialist Program
              </p>
              <p className="mb-4">
                Results from the 2025–2026 program year, drawn from 225
                participant evaluations.
              </p>
            </Col>
            <Col>
              <Row className="justify-content-center align-items-stretch g-3">
                <Col>
                  <div className="rounded-3 bg-transparent border border-dark-subtle p-5 h-100">
                    <h3>Certification Funnel</h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-dark border-opacity-25">
                        340 participants enrolled
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-dark border-opacity-25
                    "
                      >
                        100% completed the full training
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-dark border-opacity-25">
                        97% became certified professionals
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0
                    "
                      >
                        2% did not meet passing standard
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
                <Col>
                  <div className="rounded-3 bg-blue p-5 h-100">
                    <h3 className="text-primary">Exam Performance</h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white">
                        Passing standard: 14 of 20 (70%)
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white
                    "
                      >
                        Average score: 18.29 of 20
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white">
                        Median score: 19 of 20
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 text-white
                    "
                      >
                        199 of 340 scored a 19 or 20
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsFoundationsVsMasterkey">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="flex-column justify-content-between align-items-center g-lg-5">
            <Col lg={8} className="text-md-center">
              <h2 className="prehead">Why Masterkey Stands Apart</h2>
              <p className="h2">
                Certification Is the Floor,
                <br />
                <em>Not</em> the Finish Line
              </p>
              <p className="mb-4">
                Masterkey was built to close the gap between a certificate and
                the confidence required for complex, real-world field work.
              </p>
            </Col>
            <Col>
              <Row className="justify-content-center g-3">
                <Col>
                  <div className="rounded-3 bg-primary-subtle p-5 h-100">
                    <h3>Foundational Trainings</h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-dark border-opacity-25">
                        Introduces certification concepts
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-dark border-opacity-25
                    "
                      >
                        Primarily lecture-based instruction
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-dark border-opacity-25">
                        General communication principles
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-dark border-opacity-25
                    "
                      >
                        Limited practice with field scenarios
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0
                    "
                      >
                        Certification as the primary endpoint
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
                <Col>
                  <div className="rounded-3 bg-blue p-5 h-100">
                    <h3 className="text-primary">the Masterkey Experience</h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white">
                        <i class="bi bi-check-circle-fill text-primary"></i>{" "}
                        Builds long-term professional readiness
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white
                    "
                      >
                        <i class="bi bi-check-circle-fill text-primary"></i>{" "}
                        Interactive, scenario-based application
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white">
                        <i class="bi bi-check-circle-fill text-primary"></i>{" "}
                        Advanced engagement and boundary skills
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 border-bottom border-white border-opacity-25 text-white
                    "
                      >
                        <i class="bi bi-check-circle-fill text-primary"></i>{" "}
                        Practice with real behavioral health situations
                      </ListGroup.Item>
                      <ListGroup.Item
                        className="
                      bg-transparent ps-0 text-white
                    "
                      >
                        <i class="bi bi-check-circle-fill text-primary"></i>{" "}
                        Leadership and continued growth pathways
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsCompetencies">
        <Container fluid="xl" className="py-5 py-lg-6">
          <Row className="flex-column justify-content-center align-items-center g-lg-5">
            <Col lg={8} className="text-md-center">
              <h2 className="prehead">Core Professional Competencies</h2>
              <p className="h2">
                Sixteen Competencies,
                <br />
                Reinforced Through Practice
              </p>
              <p className="mb-4">
                Participants don't just discuss these skills—they practice using
                them when situations are complex, emotional, charged, and
                time-sensitive.
              </p>
            </Col>
            <Col>
              <Row className="justify-content-center align-items-stretch g-3">
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-chat-dots"></i>
                    <h3>
                      Professional <br />
                      Communication
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-chat-square-heart"></i>
                    <h3>
                      Recovery-Oriented <br />
                      Support
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-shield-check"></i>
                    <h3>
                      Ethics and <br />
                      Boundaries
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-yin-yang"></i>
                    <h3>
                      Conflict <br /> Mitigation
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-megaphone"></i>
                    <h3>
                      Advocacy <br /> and Voice
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-geo-alt"></i>
                    <h3>
                      Community <br />
                      Navigation
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-people"></i>
                    <h3>
                      Group <br />
                      Facilitation
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-cloud-sun"></i>
                    <h3>
                      Mental Health <br />
                      Recovery
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-heart-pulse"></i>
                    <h3>
                      Trauma-Informed <br />
                      Practice
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-graph-up-arrow"></i>
                    <h3>
                      Motivational <br />
                      Engagement
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-telephone"></i>
                    <h3>
                      Crisis <br />
                      Communication
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-pencil"></i>
                    <h3>
                      Documentation <br />
                      Practices
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-globe2"></i>
                    <h3>
                      Cultural <br />
                      Humility
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-flag"></i>
                    <h3>
                      Leadership <br />
                      Development
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-leaf"></i>
                    <h3>
                      Self-Care <br />
                      and Resilience
                    </h3>
                  </Card>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <Card className="statCard h-100">
                    <i class="bi bi-arrow-repeat"></i>
                    <h3>
                      Substance <br />
                      Use Recovery
                    </h3>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsTestimonials" className="testimonials">
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
      <section id="programsNextSteps" className="nextSteps">
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
