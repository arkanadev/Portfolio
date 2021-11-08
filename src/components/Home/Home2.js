import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Saya menyukai dunia pemrograman dan setidaknya saya belajar sesuatu
              <br />
              <br />Saya menguasai secara dasar seperti
              <i>
                <b className="purple"> PHP, HTML, Javascript dan MySQL. </b>
              </i>
              <br />
              <br />
              Minat bidang saya adalah membuat &nbsp;
              <i>
                <b className="purple">Teknologi Web </b> dan
                juga bidang yang barkaitan.{" "}
                <b className="purple">
                </b>
              </i>
              <br />
              <br />
              Saya membiasakan diri saya membangun web dengan
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library dan Frameworks
                </b>
              </i>
              &nbsp; seperti
              <i>
                <b className="purple"> Laravel dan React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
