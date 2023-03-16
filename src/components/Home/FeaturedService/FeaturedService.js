import React from "react";

const Service = ({ service }) => {
  const { img, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img className="h-52" src={img} alt="clothes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Join as volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
