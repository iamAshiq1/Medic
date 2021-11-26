import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="d-flex align-items-center mt-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://www.anovacancercare.com/wp-content/uploads/2016/01/Doctor-With-Satisfied-Patient-1.jpg')",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}
      >
        <div className="mx-5">
          <h1 className="text-light fw-bolder">Let Us Brighten Your Smile!</h1>
          <h5 className="text-light mb-4">
            We are dental care clinic that helps people to take care of <br />
            their health and we have best dental doctors in here.
          </h5>
          <h3 style={{backgroundColor: "#3259B9"}} className='btn text-light mt-4 p-2 fw-bolder'>Scroll down For Learn More	&darr;</h3>
        </div>
      </div>
      <div style={{marginTop: "-100px"}} className="row justify-content-center px-lg-5 mx-3 gap-0">
        <div style={{backgroundColor: "#385BB2"}} className="col-lg-4 text-light p-5">
          <i className="fas fa-phone-alt fs-1"></i>
          <hr />
          <h3 className="fw-bolder mb-4">Emergency</h3>
          <p>
            We always try to response when someone call us for emergency..And we
            try our best for connect with patients
          </p>
          <br />
          <a className="text-light" href="tel:+123456789">CALL US NOW</a>
        </div>
        <div style={{backgroundColor: "#446CCD"}} className="col-lg-4 text-light p-5">
          <i className="fas fa-map-marked-alt fs-1"></i>
          <hr />
          <h3 className="fw-bolder mb-4">Where Are We ?</h3>
          <p>
            We always try to response when someone call us for emergency..And we
            try our best for connect with patients
          </p>
          <br />
          <a className="text-light" href="https://www.google.com.bd/maps">SEE ON MAP</a> 
        </div>
        <div style={{backgroundColor: "#F8F8F8"}} className="col-lg-4 text-secondary p-5">
        <i className="far fa-calendar-alt fs-1"></i>
          <hr />
          <h3 className="fw-bolder mb-4">Opening Hours</h3>
          <h5>
            Mon-Fri: <span className="ms-5">8:00am - 7:00pm</span>
          </h5>
          <h5>
            Saturday: <span className="ms-5">9:00am - 6:00pm</span>
          </h5>
          <h5>
            Sunday: <span className="ms-5">Closed</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Banner;
