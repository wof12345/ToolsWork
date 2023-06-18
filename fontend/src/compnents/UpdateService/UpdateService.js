import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import "../AddService/AddService.css";

let len = null;
const UpdateService = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!len) {
          if (data && data.name) setService(data);
          console.log(data);

          len = data;
        }
      });
  }, [service, serviceId]);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedService = {
      name: updatedName,
      desc: service.desc,
      img: service.img,
      tags: service.tags,
    };
    setService(updatedService);
  };
  const handledescChange = (e) => {
    const updateddesc = e.target.value;
    const updatedService = {
      name: service.name,
      desc: updateddesc,
      img: service.img,
      tags: service.tags,
    };
    setService(updatedService);
  };
  const handletagsChange = (e) => {
    const updatedtags = e.target.value;
    const updatedService = {
      name: service.name,
      desc: service.desc,
      img: service.img,
      tags: updatedtags,
    };
    setService(updatedService);
  };
  const handleImageChange = (e) => {
    const updatedImg = e.target.value;
    const updatedService = {
      name: service.name,
      desc: service.desc,
      img: updatedImg,
      tags: service.tags,
    };
    setService(updatedService);
  };

  const handleUpdateService = (e) => {
    fetch(`http://localhost:5000/services/${serviceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
      });

    e.preventDefault();
  };

  return (
    <div className="add w-50 my-5 py-3 m-auto d-flex flex-column justify-content-center">
      <Form
        className="d-flex flex-column justify-content-center"
        onSubmit={handleUpdateService}
      >
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={service.name || "null "}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={service.desc || "null "}
            onChange={handledescChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>tags</Form.Label>
          <Form.Control
            type="text"
            value={service.tags || "null "}
            onChange={handletagsChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={service.img || "null "}
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateService;

// Traveling-5th  g7zdHnix875yuNIc
