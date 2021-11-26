import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="row my-5 mx-1 align-items-center justify-content-center">
      <div className="col-lg-6 my-4">
        <h2 className="fw-bolder">
          Choose Our Clinic, Choose The Best Care For Yourself and Your Family
        </h2>
        <img width="100%"
          src="https://img.freepik.com/free-photo/medical-stethoscope-with-paper-cut-family_23-2148488217.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div className="col-lg-5 mt-5">
        <h5 style={{color: "gray"}}>
          Many medical clinics focus mainly on providing primary care services.<br/>
          However, some types of clinics do focus on specific areas of medicine.<br/>
          Additionally, medical clinics can be associated with a hospital or
          university.<br/><br/> Some may offer low cost or no-cost care. Others can be
          found within retail stores.<br/><br/>  With such a diversity of different clinic
          types,<br/>how do you know which type of medical clinic may be best for
          your healthcare needs? <br/><br/>  Additionally,how are these clinics different
          from hospitals?
        </h5>
        <Button  className='btn btn-outline-dark mt-4 p-3 fw-bolder'><Link className="text-decoration-none" to="/Doctors">Meet Our Doctors</Link></Button>
      </div>
      <hr/>
    </div>
  );
};

export default Info;
