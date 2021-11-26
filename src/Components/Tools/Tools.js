import React from "react";
import "./Tools.css"
const Tools = () => {
  return (
    <div className="row mx-1 mt-5 justify-content-evenly align-items-center">
      <div className="col-lg-5 my-4">
        <h3 className="fw-bolder">Our Principles for Digital Tools</h3>
        <hp>
          We practice human-centered, participatory design when building,
          scaling, and studying new technologies and strategies. We believe
          creating and supporting open-source projects promotes accountability,
          encourages local ownership and adaptation, and supports standards that
          enable collaboration and efficient data-sharing. We work in solidarity
          with technical organizations, governments, and NGOs to harness these
          tools for care coordination, health workforce performance management,
          and wider health systems strengthening.
        </hp>
      </div>
      
      <div className="col-lg-5 my-4">
        <iframe className="youtube"
          src="https://www.youtube.com/embed/agPsqRDNS3g"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
        
      </div>
      <hr/>
      <div className="col-lg-5 my-4">
        <img
          width="100%"
          src="https://stakeholderhealth.org/wp-content/uploads/2015/06/Screen-Shot-2015-06-30-at-2.28.11-PM.png"
          alt=""
        />
      </div>
      <div className="col-lg-5 my-4">
        <h3 className="fw-bolder">The Community Health Toolkit</h3>
        <p>
          Medic serves as the technical steward and a core contributor for the
          Community Health Toolkit (CHT), a global public good that supports
          health workers as they deliver care in reimagined health systems.The
          CHT includes a collection of open-source software frameworks and
          applications, with resources to help partners design and deploy
          digital tools for care teams with the support of an active community
          of collaborators.
        </p>
      </div>
    </div>
  );
};

export default Tools;
