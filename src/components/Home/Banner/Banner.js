import React from "react";
import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner1} alt="" className="w-screen h-screen" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/3">
          <h1 className="text-5xl text-white">
            The best way to find yourself is to lose yourself in the service of
            others
          </h1>
        </div>
        <div className="absolute flex flex-col transform -translate-y-1/2 left-20 right-20 top-3/4">
          <h3 className="text-3xl text-white">Want to be a volunteer?</h3>
          <button className="btn btn-ghost text-white bg-lime-500 w-40">
            Join here
          </button>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner2} alt="" className="w-screen h-screen" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/3">
          <h1 className="text-5xl text-white">
            The best way to find yourself is to lose yourself in the service of
            others
          </h1>
        </div>
        <div className="absolute flex flex-col transform -translate-y-1/2 left-20 right-20 top-3/4">
          <h3 className="text-3xl text-white">Want to be a volunteer?</h3>
          <button className="btn btn-ghost text-white bg-lime-500 w-40">
            Join here
          </button>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner3} alt="" className="w-screen h-screen" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-16 top-1/3">
          <h1 className="text-5xl text-white">
            The best way to find yourself is to lose yourself in the service of
            others
          </h1>
        </div>
        <div className="absolute flex flex-col transform -translate-y-1/2 left-20 right-20 top-3/4">
          <h3 className="text-3xl text-white">Want to be a volunteer?</h3>
          <button className="btn btn-ghost text-white bg-lime-500 w-40">
            Join here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
