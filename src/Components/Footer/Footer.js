import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#323232", margin: "0px 1px"}}
        className="row gap-5 p-3 text-light align-items-center justify-content-around"
      >
        <div className="col-lg-5  m-2">
          <h2 className="fw-bolder">Contact Us</h2>
          <i className="fas fa-envelope fs-5 my-2"> Example@gmail.com </i>{" "}
          <br />
          <i className="fas fa-phone-alt fs-5 my-2"> +123456789</i> <br />
          <i className="fas fa-map-marker-alt fs-5 my-2">
            {" "}
            210-27 Quadra, Market Street, Victoria Canada
          </i>
        </div>
        <div className="col-lg-5 m-2">
          <Form>
            <h3 className="fw-bolder">FeedBack</h3>
            <Form.Group className="my-2">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Control type="text" placeholder="Message" />
            </Form.Group>
            <Button className="btn btn-dark px-4 mt-4" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <h6
        style={{backgroundColor: "#323232", margin: "0px 1px"}}
        className="text-center text-light py-2"
      >
        Copyright © 2021 Powered by MediCare
      </h6>
    </>
  );
};

export default Footer;
