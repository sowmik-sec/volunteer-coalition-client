import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Events = () => {
  const events = useLoaderData();
  return (
    <div>
      <div className="my-5">
        <Link to="/" className="text-3xl">
          Volunteer Coalition
        </Link>
      </div>
      <div className="flex">
        <div className="w-[20%]">
          <div className="mx-[20%] my-[20%]">
            {events.map((event) => (
              <Link to={`${event._id}`} key={event._id}>
                <p className="my-2">{event.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Events;
