import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const ShowServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold my-2">
          Grow By Helping People in need.
        </h1>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Search..."
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ShowServices;
