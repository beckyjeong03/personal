import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../asset/SeekPng.com_astronaut-png_5210550.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Computer Science.", "Web Development.", "UI/UX Design."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(80)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200 - Math.random() * 100);

        }


    }

    return (
        <section className="banner" id="home">
            <Container >
                {/* <Row className="align-items-center"> */}
                    <span className="tagline my-4">Welcome to my Portfolio

                    </span>

                    <h1 className="mt-4"> {`Hi, I'm Becky Jeong. I study `}<span className="wrap">{text}</span> </h1>
                    <p>Currently 2B Computer Science Student at University of Waterloo</p>



                {/* </Row> */}
            </Container>
        </section>
    )

}