import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const WorkCard = ({worktitle, description, time, imgUrl, url})=> {
    return (
        <Col sm={12} md={6}>
            <Link to={url} target="_blank">
            <div className="proj-imgbx">
                <img src={imgUrl} className="image-cover" />
                <div className="proj-txtx">
                    <h4>{worktitle}</h4>
                    <span>{description}</span>
                    <p>{time}</p>

                </div>
            </div>
            </Link>
        </Col>
    )
}