import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={12} md={4}>
            <Link to={url} target="_blank">

                <div className="proj-imgbx">
                    <img src={imgUrl} className="image-cover" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Link>

        </Col>
    )
}
