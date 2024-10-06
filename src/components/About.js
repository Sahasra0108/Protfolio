import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import sachiniImg from "../assets/img/Sachini.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  
  return (
    <div data-aos="fade-up">
    <section className="project" id="about">
      <Container>
        <Row className="align-items-center justify-content-center py-4" style={{ minHeight: '100vh' }}>
          <Col md={7} className="d-flex flex-column align-items-center justify-content-center">
            <h2>About Me</h2>
            <div className="w-100 px-4">
              <div className="text-gray-500 sm-text-lg dark:text-gray-400">
                <p className="mb-4 text-justify">
                I am passionate about Information and Communication Technology (ICT) and currently pursuing my undergraduate degree in Information Technology at the University Of Moratuwa. My goal is to stay at the forefront of technological advancements and continuously enhance my skills in software development, web technologies, and problem-solving. I enjoy tackling challenges that push me to learn and grow, especially in dynamic, fast-evolving environments.
                </p>
                <p className="mb-4 text-justify">
                With strong collaboration skills, I work effectively with teams to achieve shared goals. My interpersonal and communication abilities allow me to contribute meaningfully to group projects. Staying current with new technology excites me, and I continuously seek opportunities to expand my knowledge in this ever-changing field.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                {/* Placeholder for download CV button */}
              </div>
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column align-items-center justify-content-center py-4 overflow-hidden">
          <img src={sachiniImg} alt="mockup" className="img-fluid" />
             
          </Col>
        </Row>

      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
    </div>
  );
  
};
