import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import tristarWhiteLogo from "/src/assets/logos/tristar-white.svg";

export default function Programs() {
  return (
    <>
      <section id="programsHero">
        <Container fluid="xl" className="py-5 py-lg-6">
          <img src={tristarWhiteLogo} alt="" width="50" height="50" />
          <h1>Masterkey Professional</h1>
          <p>Advanced Peer Recovery Specialist Program</p>
          <Row className="justify-content-center align-items-center mt-5">
            <Col lg={3}>
              <Card className="p-3">
                <i className="bi bi-person programBoxIcons"></i>
                <h2>300+ Trained</h2>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="p-3">
                <i className="bi bi-clock programBoxIcons"></i>
                <h2>70 Hour Course</h2>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className="p-3">
                <i className="bi bi-mortarboard programBoxIcons"></i>
                <h2>97% Certification</h2>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="programsAbout">
        <Container className="pb-5 pb-lg-6">
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <h2>
                Turn Your Experiences Into a Career That <em>Changes</em> Lives
              </h2>
              <p>
                A live, instructor-led training program built to prepare you for
                the{" "}
                <strong>
                  Colorado Peer and Family Specialist (CPFS) Certification
                </strong>{" "}
                or the{" "}
                <strong>
                  National Certified Peer Recovery Support Specialist (NCPRSS)
                  Credential
                </strong>{" "}
                — so your lived experience becomes a recognized, paid
                profession.
              </p>
            </Col>
            <Col lg={5}>
              <div className="courseDetailsBox">
                <h2>Course Details</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
