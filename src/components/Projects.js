import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/inventory.jpeg";
import projImg3 from "../assets/img/trip.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Cards2 from "./Card2";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);


  const projects = [
    {
      title: "Advanced Bicycle Ride Tracking and Analysis System",
      description: " This system is designed for both professional cyclists and daily exercisers, enabling them to track and analyze crucial performance metrics during their cycling journeys.",
      imgUrl: projImg1,
      link:"https://github.com/ashanmwick/velosense.git"
    },
    {
      title: "SyncPro-Inventory Management System",
      description: "Increasing the productivity of the business by implementing a comprehensive  software solution that effectively manages the limited resources of the company, such as requests,reservations, maintenance, and providing a user-friendly interface.",
      imgUrl: projImg2,
      link:""
    },
    {
      title: "WanderWell-Trip Planning App",
      description: "This system provides users with an intuitive platform to simplify the process of organizing,booking and managing travel plans.",
      imgUrl: projImg3,
    }
  ];

  return (
    <div data-aos="fade-up">
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Highlights from some of my projects.These will surely inspire you..</p>
                
                <Row>
                
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                         
                      </Row>
                
                {/* <Card/> */}
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      
    </section>
    </div>
  )
}
