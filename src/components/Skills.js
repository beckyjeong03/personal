
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../asset/java-logo-1.png";
import htmlcss from "../asset/html.webp";
import react from "../asset/react.png";
import javascript from "../asset/js.png";
import c from "../asset/c.png";
import cpp from "../asset/cpp.png";
import sql from "../asset/sql.png";
import nextjs from "../asset/nextjs.png";





export const Skills = () => {
  const responsive = {
    uperLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>SoftSkils: Communication, time management, dedication, critical thinking, adatation</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={nextjs} alt="image" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="image" />
                  <h5>Reactjs</h5>
                </div>
                <div className="item">
                  <img src={htmlcss} alt="image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={c} alt="image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={java} alt="image" />
                  <h5>Java</h5>
                </div>



              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={''} />
    </section>
  )

}