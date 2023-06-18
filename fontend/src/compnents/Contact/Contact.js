import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact_outerDiv" id="2">
      <div className="Contact_innerDiv">
        <div className="Contact_Box">
          <img
            className="Contact_brand"
            src="Image/logo.jpg"
            alt=""
            width="80"
            height="80"
          />
          <h6 className="mx-5 mt-3">
            Facebook: <span style={{ color: "#3b5998" }}>facebook.com</span>{" "}
          </h6>
        </div>
        <div className="Contact_Box ">
          <h5 className="SiteMap"> SITEMAP </h5>

          <div className="link_outer">
            <div className="link_cont">
              <a className="Contact_link" href="/#">
                Home
              </a>{" "}
              <a className="Contact_link" href="/#3">
                Services
              </a>
            </div>

            <div className="link_cont">
              <a className="Contact_link" href="/#2">
                Contact
              </a>

              <a className="Contact_link" href="/#1">
                Bannar
              </a>
            </div>

            <div className="link_cont">
              {" "}
              <a className="Contact_link" href="/addService">
                Add Service
              </a>
            </div>
          </div>
        </div>
        <div className="Contact_Box">
          <h5 className="Feedback_title">Your Feedback? </h5>
          <Form className="d-flex flex-column align-items-center">
            <Form.Group className="mx-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mx-4 my-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text" placeholder="Your comment" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button className="Feedback_btn" variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <hr></hr>
      <p className="CopyRight m-0 p-4">All rights reserved @2023 Blogstore</p>
    </div>
  );
};

export default Contact;
