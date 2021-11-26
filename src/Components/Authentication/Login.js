import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../../Firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

initializeAuthentication();

const Login = () => {
  const {
    user,
    error,
    isLogin,
    signInUsingGoogle,
    setUser,
    setIsLoading,
    toggleLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
  } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleWithGoogle = () => {
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(location.state?.from || "/Home");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h5 className="text-center fw-bolder text-primary my-3">
          Please {isLogin ? "Login" : "Register"}
        </h5>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <Form onSubmit={handleRegistration}>
              {!isLogin && (
                <Form.Group className="my-5">
                  <Form.Control
                    onBlur={handleNameChange}
                    className="rounded-pill border-3"
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              )}

              <Form.Group className="my-5">
                <Form.Control
                  onBlur={handleEmailChange}
                  className="rounded-pill border-3"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mt-5">
                <Form.Control
                  onBlur={handlePasswordChange}
                  className="rounded-pill border-3"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <div className="my-4">
                <Form.Check
                  inline
                  label="Already Registered ?"
                  name="group1"
                  type="checkbox"
                  onChange={toggleLogin}
                />
              </div>

              <div className="text-danger">{error}</div>
              <Button className="button" type="submit">
                {isLogin ? "LOGIN" : "REGISTER"}
              </Button>
            </Form>
          </div>
          <div className="col-lg-6">
            <img
              width="100%"
              src="https://www.sofikart.com/assets/img/pwd2.jpg"
              alt=""
            />
          </div>

          {user?.email ? (
            <h3 className="text-success text-center"> successful !!</h3>
          ) : (
            <button className="btn btn-light" onClick={handleWithGoogle}>
              <img src="https://i.stack.imgur.com/QPLoG.png" alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
