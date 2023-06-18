import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Recommend from "../Recommend/Recommend";
import "./AddService.css";

const AddService = () => {
  const nameRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();
  const tagsRef = useRef();

  const handleAddService = (e) => {
    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.value;
    const tags = tagsRef.current.value;

    const newService = { name, desc, img, tags };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
      // stringify data -> json
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("data is Successfully Added data");
          // newService({});
        }
      });

    e.preventDefault();
  };

  return (
    <div className="add w-50 my-5 py-3 m-auto d-flex flex-column justify-content-center">
      <Recommend></Recommend>
      <h1 className="text-center">Add a blog</h1>
      <Form
        onSubmit={handleAddService}
        className="d-flex flex-column justify-content-center"
      >
        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter  Name" />
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control ref={descRef} type="text" placeholder="Enter desc" />
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Enter image link</Form.Label>
          <Form.Control
            ref={imgRef}
            type="text"
            placeholder="Enter image link"
          />
        </Form.Group>

        <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
          <Form.Label>Enter tags seperated by commas, no space</Form.Label>
          <Form.Control
            ref={tagsRef}
            type="text"
            placeholder="Enter tags(eg. creative,light)"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddService;
