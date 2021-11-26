import React from 'react';

const Extra = () => {
    return (
        <div
        style={{ backgroundColor: "#446CCD" }}
        className="row gap-5 p-5 mx-1 text-center text-white justify-content-center"
      >
        <div
          style={{ backgroundColor: "#496ECC", boxShadow: "3px 3px 10px blue" }}
          className="col-lg-2 p-5"
        >
          <h2 className="fw-bolder"> 10 + </h2>
          <h5>Cancer Specialist</h5>
        </div>
        <div
          style={{ backgroundColor: "#496ECC", boxShadow: "3px 3px 10px blue" }}
          className="col-lg-2 p-5"
        >
          <h2 className="fw-bolder"> 15 + </h2>
          <h5>Great Dentist</h5>
        </div>
        <div
          style={{ backgroundColor: "#496ECC", boxShadow: "3px 3px 10px blue" }}
          className="col-lg-2 p-5"
        >
          <h2 className="fw-bolder"> 25 + </h2>
          <h5>Orthopedic Surgeons</h5>
        </div>
        <div
          style={{ backgroundColor: "#496ECC", boxShadow: "3px 3px 10px blue" }}
          className="col-lg-2 p-5"
        >
          <h2 className="fw-bolder"> 15 + </h2>
          <h5>Years Of Experience</h5>
        </div>
      </div>
    );
};

export default Extra;