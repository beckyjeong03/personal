import { Nav, Tab } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkCard } from "./WorkCard";
//import colorSharp2 from "../assest/color-shar"
import imageapp from "../asset/Untitled (4).png";
import weatherapp from "../asset/weatherappp.png";
import brickbreaker from "../asset/brickbreaker.png";
import selfdriving from "../asset/Self-driving.png";
import tidepool from "../asset/Tidepool.png";
import microsoft from "../asset/microsoft.png";

export const Project =()=>{


    const projects =[
        {
            title: "Personal Website",
            description: "Design & Development",
            imgUrl: imageapp,
            url: "/workdescription"
          },
          {
            title: "self-driving Car",
            description: "Development & Research",
            imgUrl: selfdriving,
            url: "/workdescription"

          },
          {
            title: "Brick Breaker",
            description: "Design & Development",
           imgUrl: brickbreaker,
           url: "/workdescription"

          },
          {
            title: "Chess Game",
            description: "C++",
            imgUrl: brickbreaker,
            url: "/workdescription"

          },
          {
            title: "Tidepool Homepage",
            description: "next.js, AWS, Docker",
            imgUrl: tidepool,
            url: "/workdescription"

          },
          {
            title: "Fishscope Website",
            description: "REST Api, next.js",
            imgUrl: tidepool,
            url: "/workdescription"

          }
          
        ];
        const workExperience =[
            {
                worktitle: "Machine Learning Developer",
                description: "WE ACCELERATE - Microsoft Stream",
                time: "July 2023 - Aug 2023",
                imgUrl: microsoft,
                url: "/weaccelerate",
              },
               {
                worktitle: "Full-Stack Developer",
                description: "TIDEPOOL",
                time: "July 2023 - Present", 
                imgUrl: tidepool,
                url: "/tidepool",
              }
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
                        <h2>Projects & Work Experience</h2>
                        <p>Here are some skills I've explored.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Work Experience</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link eventKey="third">ExtraCurricular</Nav.Link>
                            </Nav.Item> */}
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
                                        workExperience.map((work,index) => {
                                            return (
                                                <WorkCard
                                                key={index}
                                                {...work}
                                                />
                                            )
                                        })
                                            
                                        
                                    }
                                </Row></Tab.Pane>
                            {/* <Tab.Pane eventKey="third"> <Row>
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
                                </Row></Tab.Pane> */}



                        </Tab.Content>
                        </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={''}></img>
                </section>
        )

}