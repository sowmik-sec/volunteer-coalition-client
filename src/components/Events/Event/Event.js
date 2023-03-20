import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Event = () => {
  const [image, setImage] = useState();
  const event = useLoaderData();
  const { datepicker, description, fileId, title } = event;
  useEffect(() => {
    fetch(`/events/img/${fileId}`)
      .then((res) => res.blob())
      .then((blob) => {
        const imageSrc = URL.createObjectURL(blob);
        setImage(imageSrc);
      })
      .catch((error) => console.error(error));
  }, [fileId]);

  console.log(image);
  return (
    <div>
      <img src={image} alt="" />
      <h3 className="text-3xl">{title}</h3>
      <p>{datepicker}</p>
      <p>{description}</p>
    </div>
  );
};

export default Event;
