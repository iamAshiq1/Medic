import React from "react";

const News = () => {
  return (
    <>
      <h2 className="text-center">Our News</h2>
      <div className="row my-5 mx-1 gap-5 justify-content-center">
          <div className="col-lg-3">
              <img width="100%" src="https://www.adentalcare.com/wp-content/uploads/2019/11/girl-braces.jpg" alt=""/>
              <h4 className="fw-bold mt-3">5 Tips for Creating the Most Brightest Smile in World</h4>
              <p>A smile is formed primarily by flexing the muscles at the sides of the mouth. Some smiles include a contraction of the muscles at the corner of the eyes, an action known as a Duchenne smile.</p>
          </div>
          <div className="col-lg-3">
              <img width="100%" src="https://pbs.twimg.com/media/ElUiAhzUYAIVtfe.png" alt="" />
              <h4 className="fw-bold mt-3">How to Keep Your Teeth Always in the Best Condition</h4>
              <p>The treatment for permanent teeth consists of replantation, immediately if possible. Deciduous teeth should not be replanted due to the risk of damaging the permanent tooth germ.</p>
          </div>
          <div className="col-lg-3">
              <img width="100%" src="https://static.colgatetalks.com/wp-content/uploads/2019/07/setup-900x600.jpg" alt="" />
             <h4 className="fw-bold mt-3">Do You Need to Prepare before Going to the Dentist?</h4>
             <p>
             I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
             </p>
             
          </div>
      </div>
    </>
  );
};

export default News;
