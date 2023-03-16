import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import ShowServices from "../ShowServices/ShowServices";

const Services = () => {
  return (
    <div>
      <Header />
      <ShowServices />
    </div>
  );
};

export default Services;
