import React, { useLayoutEffect, useState } from "react";
import { Badge } from "react-bootstrap";

import CardModel from "../Card/card";
import "./Services.css";

let len = null;
let active = -1;
let tags = [];
function setTags(services) {
  tags = [];

  services.forEach((elm, ind) => {
    elm.tags.forEach((tag) => {
      tags.push(tag);
    });
  });
  // console.log(tags);
}

const Services = () => {
  const [services, setServices] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.length, services.length);

        if (data.length !== len || !len) {
          setServices(data);
          setTags(data);
          len = data.length;
        }
      });
  }, [services]); // depandency array;

  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");

    if (proceed) {
      fetch(`http://localhost:5000/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);

          if (data.deletedCount > 0) {
            alert("deleted successful.");

            const remainingServices = services.filter(
              (service) => service.id !== id
            );
            // console.log(services.length);

            setServices(remainingServices);
          }
        });
    }
  };

  const getServiceBytag = (query, idx) => {
    active = idx;
    fetch(`http://localhost:5000/services/filter`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  };

  return (
    <div className="main_col">
      <div className="tagShow">
        {tags.map((tag, idx) => (
          <Badge
            className="badge_show"
            id={tag}
            key={idx}
            style={{
              transform:
                idx === active ? "translateY(-10px)" : "translateY(0px)",
            }}
            onClick={() => {
              getServiceBytag({ tags: { $in: [tag] } }, idx);
            }}
          >
            {tag}
          </Badge>
        ))}
        <div className="absolute right-0">
          <button
            className="btn"
            onClick={() => {
              getServiceBytag({}, -1);
            }}
          >
            clear
          </button>
        </div>
      </div>

      <div className="services" id="3">
        {services.map((service, idx) => (
          <CardModel
            key={+idx}
            realService={service}
            handleDeleteService={handleDeleteService}
          ></CardModel>
        ))}
      </div>
    </div>
  );
};
export default Services;
