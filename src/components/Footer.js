import { Container, Row, Col } from 'react-bootstrap';
import logo from '../asset/beckylogo.png';
import navIcon1 from '../asset/nav-icon1.png';
import navIcon2 from '../asset/nav-icon2.png';
import navIcon3 from '../asset/nav-icon3.png';

export const Footer = () => {
  return (
    <>
      <div className="contactinfo container w-[50%] h-300px">
        <h1 className="flex mx-auto justify-center items-center">Contact Information</h1>
        <Container>
          <Row className="align-items-center">
            <Col size={12} className="text-sm-start">
              <div className="my-2">Email: bjeong@uwaterloo.ca</div>
            </Col>
            <Col size={12} className="text-center ">
              <div className="my-2">Instagram: becky_jeong_</div>
            </Col>
            <Col size={12} className="text-center text-sm-end">
              <div className="my-2">LinkedIn: linkedin.com/in/becky-jeong</div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
