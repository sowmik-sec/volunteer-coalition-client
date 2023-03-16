import React from "react";
import FeaturedService from "../Home/FeaturedService/FeaturedService";

const Services = () => {
  const services = [
    {
      _id: 1,
      title: "Child Support",
      img: "https://i.pinimg.com/originals/37/9d/5a/379d5a1cdd19fd282476dc13a536630f.jpg",
    },
    {
      _id: 2,
      title: "Refuge shelter",
      img: "https://riba-prd-assets.azureedge.net/-/media/GatherContent/Where-will-your-RIBA-Awards-journey-lead/Image-One/AzraqRefugeeCampRIBAResearchAwardsPhotoScarlettTigerColey700x455jpg.jpg?rev=1af9031e03054670a8fe7f03557fc0e9&h=455&w=700&la=en&hash=127F84C8D3E4F88A84C2A866148957D3",
    },
    {
      _id: 3,
      title: "Food Charity",
      img: "https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/045/CAF_feature_main.jpg",
    },
    {
      _id: 4,
      title: "Host a clothing swap",
      img: "https://theecohub.com/wp-content/uploads/2022/04/how-to-host-a-clothing-swap-party-1-930x620.jpg",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-5xl font-bold mb-3">Featured Volunteer services</h1>
      <div className="flex justify-evenly gap-4">
        {services.map((service) => (
          <FeaturedService key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-accent my-6">Show more services</button>
      </div>
    </div>
  );
};

export default Services;
