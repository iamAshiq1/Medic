import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const [service, setService] = useState([]);
  const [details, setDetails] = useState({});
  const { serviceId } = useParams();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  useEffect(() => {
    setDetails(service.find((item) => item.id === parseInt(serviceId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);
  
  return (
    <div className="row justify-content-center my-5 mx-1 align-items-center">
      <div className="col-lg-5 mt-5">
        <img width="100%" src={details?.img} alt="" />
      </div>
      <div className="col-lg-5">
        <h1 className="fw-bolder my-5">{details?.name}</h1>
        <h5 style={{color: "gray"}}>{details?.description}</h5>
      </div>
    </div>
  );
};

export default Details;
