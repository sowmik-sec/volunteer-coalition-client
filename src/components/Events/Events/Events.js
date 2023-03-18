import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <div className="my-5">
        <Link to="/" className="text-3xl">
          Volunteer Coalition
        </Link>
      </div>
      <div className="flex">
        <div className="w-[20%]"></div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Events;
