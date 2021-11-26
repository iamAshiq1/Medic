import React from "react";
import Doctors from "../Doctors/Doctors";
import Banner from "../Banner/Banner";
import Info from "../info";
import Services from "../Services/Services";
import Extra from "../Service/Extra";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Extra></Extra>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
