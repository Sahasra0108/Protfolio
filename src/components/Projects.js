import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Cards2 from "./Card2";

export const Projects = () => {

  const cards = [
    {
        id: 1,
        title: "Project 1",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
    {
        id: 2,
        title: "Project 2",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
    {
        id: 3,
        title: "Project 3",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
    {
        id: 4,
        title: "Project 4",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
    {
        id: 5,
        title: "Project 5",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
    {
        id: 6,
        title: "Project 6",
        desc: "This is a project description",
        languages: ["React", "TypeScript", "TailwindCSS"],
        links: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAw6g643X_IP059eZ03Jh_kcr9-a-oQpMdhQ&s","https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png"],
        thumbnail: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg",
    },
];

  const projects = [
    {
      title: "Hardware Project",
      description: " This system is designed for both professional cyclists and daily exercisers, enabling them to track and analyze crucial performance metrics during their cycling journeys.",
      imgUrl: projImg1,
    },
    {
      title: "Inventory Management System",
      description: "Increasing the productivity of the business by implementing a comprehensive  software solution that effectively manages the limited resources of the company, such as requests,reservations, maintenance, and providing a user-friendly interface.",

      imgUrl: projImg2,
    },
    {
      title: "Portfolio Project",
      description: "",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Find out my projects. These will be inspire you...</p>
                
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
  )
}
