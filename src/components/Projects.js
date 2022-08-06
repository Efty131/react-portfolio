import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import "animate.css";
import TrackVisibility from 'react-on-screen';

import { ProjectCards } from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {

    const projects = [
        {
          title: "Web Development",
          description: "Design & Development",
          imgUrl: projImg1,
          LiveLink: "https://react-bootstrap.github.io/components/tabs/",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Web Development",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];

  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
                <h2>Projects</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa laudantium totam distinctio, dignissimos, iste mollitia delectus harum asperiores in maiores natus, perferendis necessitatibus ipsum.</p>
                  </div>}
                </TrackVisibility>
                  <Tab.Container id="projects-tab" defaultActiveKey='first'>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCards 
                                        key={index}
                                        {...project}
                                         />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>Lorem Ipsum</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Lorem Ispum dolor</p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>  
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="..." />
    </section>
  )
}
