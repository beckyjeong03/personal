import { Container, Row, Col } from 'react-bootstrap';
import logo from '../asset/beckylogo.png';
import navIcon1 from '../asset/nav-icon1.png';
import navIcon2 from '../asset/nav-icon2.png';
import navIcon3 from '../asset/nav-icon3.png';

export const ContactInfo = () => {
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
    </>
  );
};
