import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, img } = service;
  return (
    <div className="col-lg-4 my-4">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/Details/${id}`}>
            <Button className="btn btn-outline-primary" variant="primary">
              More Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
