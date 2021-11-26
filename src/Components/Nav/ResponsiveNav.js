import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./nav.css";

const ResponsiveNav = () => {
  const { logOut, user } = useAuth();

  return (
    <div>
      <Navbar style={{backgroundColor: "lightslategray", padding: "2px 0px" }} className="fixed-top"
        collapseOnSelect
        expand="lg">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="link" as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Services">
            Services
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Doctors">
            Doctors
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/News">
            News
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Tools">
            Tools
          </Nav.Link>
          {user?.displayName || user?.email ? (
            <Button
              className="btn btn-success ms-1"
              onClick={logOut}
              variant="light">
              Logout
            </Button>
          ) : (
            <Nav.Link as={Link} to="/Login">
              <Button className="btn btn-primary" variant="light">
                Log in
              </Button>
            </Nav.Link>
          )}
          <h6 className="text-dark fw-bold mt-2 p-2">{user?.displayName}</h6>
          <img
            width="40px"
            className="mx-2 rounded-circle"
            src={user?.photoURL}
            alt=""
          />        
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ResponsiveNav;
