import React, { useLayoutEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Bannar.css";

let len = null;
let head = "Featured";
const Bannar = () => {
  const [services, setServices] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length, services.length);

        if (data.length !== len || !len) {
          setServices(data);
          len = data.length;
        }
      });
  }, [services]);

  return (
    <div id="1" className="Caro p-10">
      <h1 className="head text-white text-center m-0">
        {head.split("").map((letter, idx) => (
          <span className="head_letter" key={idx}>
            {letter}
          </span>
        ))}
      </h1>
      <Carousel className="bg-light">
        {services.map((service) => (
          <Carousel.Item interval={2000} key={Math.random() * 1000000}>
            <div className="Caro_background">
              <div className="Caro_Title">
                <h1> {service.name}</h1>
              </div>
              <div className="Caro_Item">
                <div className="Caro_Details">
                  <p className="descBanner">{service.desc}</p>
                  <a href={"#" + service.name} className="link">
                    Read more
                  </a>
                </div>
                <div className="Caro_ImgCont">
                  <img
                    className="Caro_img"
                    src={service.img}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Bannar;
