import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import hackmoral from "../assets/img/hackmoral.png";
import inspiher from "../assets/img/inspiher.png";
import coderush from "../assets/img/coderush.jpg";
import duothan from "../assets/img/Duothan.jpg";
import ieee from "../assets/img/ieee.png";
import idealize from "../assets/img/idealize1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hackathons = () => {
  return (
    <div data-aos="fade-up" >
    <section className="hackathons" id="hackathons">
      <Container>
        <h2>Hackathons</h2>
        <div className="cardpadding">
          <Row>
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={inspiher} style={{ width: "20rem", height: "15rem" }}/>
                <Card.Body>
                  <Card.Title>InspiHer-Tech V2.0 (2023)</Card.Title>
                  <Card.Text>
                    Semi Finalist-Team VivlaLaCodes Organized by SLTC
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={coderush} style={{ width: "20rem", height: "15rem" }} />
                <Card.Body>
                  <Card.Title>Code-Rush (2024)</Card.Title>
                  <Card.Text>Organized by University of Moratuwa</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={duothan} style={{ width: "20rem", height: "15rem" }}/>
                <Card.Body>
                  <Card.Title>Duothan 3.0 (2023)</Card.Title>
                  <Card.Text>Organized by NSBM Green University</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="cardpadding">
          <Row>
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={idealize} style={{ width: "20rem", height: "15rem" }}/>
                <Card.Body>
                  <Card.Title>Idealize (2023)</Card.Title>
                  <Card.Text>Organized by University of Moratuwa</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={hackmoral} style={{ width: "20rem", height: "15rem" }}/>
                <Card.Body>
                  <Card.Title>Hackmoral 6.0 (2024)</Card.Title>
                  <Card.Text>
                    Organized by INTECS,University of Moratuwa
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col size={4} sm={4}>
              <Card style={{ width: "20rem", height: "23rem" }}>
                <Card.Img variant="top" src={ieee} style={{ width: "20rem", height: "15rem" }}/>
                <Card.Body>
                  <Card.Title>
                    IEEE Xtreme 16.0-Global Competitive Programming
                    Hackathon(2022)
                  </Card.Title>
                  <Card.Text>Organized by IEEE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    </div>
  );
};
