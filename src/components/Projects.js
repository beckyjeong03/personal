import { Nav, Tab } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import colorSharp2 from "../assest/color-shar"
import imageapp from "../asset/imageee.png";

export const Project =()=>{


    const projects =[
        {
            title: "Personal Website",
            description: "Design & Development",
            imgUrl: imageapp,
          },
          {
            title: "Weather App",
            description: "Design & Development",
            imgUrl: imageapp,
          },
          {
            title: "Brick Breaker",
            description: "Design & Development",
           imgUrl: imageapp,
          }
        ];

        return(
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col>
                        <h2>Projects</h2>
                        <p>Random Paragraphhhhhh</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="third">Tab three</Nav.Link>
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
                            <Tab.Pane eventKey="second">Secondddd</Tab.Pane>
                            <Tab.Pane eventKey="third">Thirdddd</Tab.Pane>



                        </Tab.Content>
                        </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={''}></img>
                </section>
        )

}