import React, { useRef, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import "./card.css";

const CardModel = (props, key) => {
  const [show, setShow] = useState(false);
  const { _id, name, img, tags, desc } = props.realService;
  const { handleDeleteService } = props;

  const nodeRef = useRef(null);

  setTimeout(() => {
    setShow(true);
    console.log(show, key);
  }, 1200);

  return (
    <div className="service d-flex align-items-center justify-content-center text-center ">
      <Transition nodeRef={nodeRef} in={show} timeout={1200}>
        <Card className="card" style={{ opacity: show ? "1" : "0" }} id={name}>
          <div className="img_cont">
            <Card.Img className="img" variant="top" src={img} />
          </div>
          <Card.Body>
            <Card.Title className="title">{name}</Card.Title>
            <Card.Text className="desc">
              {/* wordify */}
              {desc.split(" ").map((elm, idx) => (
                <span className="word" key={idx}>
                  {elm}
                </span>
              ))}
            </Card.Text>

            <Card.Text className="d-flex justify-content-evenly flex-wrap">
              {tags.map((item) => (
                <Badge className="badge p-2 m-2" key={Math.random() * 1000000}>
                  {item}{" "}
                </Badge>
              ))}
            </Card.Text>
            <hr></hr>

            <div className="buttons">
              <Link to={`/updateservice/${_id}`}>
                <button className="btn">Update</button>
              </Link>
              <button onClick={() => handleDeleteService(_id)} className=" btn">
                Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      </Transition>
    </div>
  );
};

export default CardModel;
