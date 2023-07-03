import { Nav, Tab } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import colorSharp2 from "../assest/color-shar"
import imageapp from "../asset/Untitled (4).png";
import weatherapp from "../asset/weatherappp.png";
import brickbreaker from "../asset/brickbreaker.png";
import selfdriving from "../asset/Self-driving.png";

export const Project =()=>{


    const projects =[
        {
            title: "Personal Website",
            description: "Design & Development",
            imgUrl: imageapp,
          },
          {
            title: "self-driving Car",
            description: "Development & Research",
            imgUrl: selfdriving,
          },
          {
            title: "Brick Breaker",
            description: "Design & Development",
           imgUrl: brickbreaker,
          }
        ];
        const projects2 =[
            // {
            //     title: "Personal Website",
            //     description: "Design & Development",
            //     imgUrl: imageapp,
            //   },
               {
                title: "Weather App",
                description: "Design & Development",
                imgUrl: weatherapp,
              },
            //   {
            //     title: "Brick Breaker",
            //     description: "Design & Development",
            //    imgUrl: brickbreaker,
            //   }
            ];
            const projects3 =[
                // {
                //     title: "Personal Website",
                //     description: "Design & Development",
                //     imgUrl: imageapp,
                //   },
                //   {
                //     title: "Weather App",
                //     description: "Design & Development",
                //     imgUrl: weatherapp,
                //   },
                  {
                    title: "Brick Breaker",
                    description: "Design & Development",
                   imgUrl: brickbreaker,
                  }
                ];

        return(
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Here are some skills I've explored.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Project Image</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Project Description</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="third">etc</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"> <Row>
                                    {
                                        <section>
                                       <h1>Hello World</h1> 
                                       <h3>Personal Project</h3>
                                       <h5>Developed a website using React.js</h5>
                                       </section>
                                            
                                        
                                    }
                                </Row></Tab.Pane>
                            <Tab.Pane eventKey="third"> <Row>
                                    {
                                        projects3.map((project,index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row></Tab.Pane>



                        </Tab.Content>
                        </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={''}></img>
                </section>
        )

}