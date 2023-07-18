// import React, { useEffect, useState } from "react";
import Himg1 from "../../assets/Himg1.png";
import Himg2 from "../../assets/Himg2.png";
import Himg3 from "../../assets/Himg3.png";
import Himg4 from "../../assets/Himg4.png";

function Header() {
  return (
    <div>
      <div className="carousel mb-0 pb-0">
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative h-[300px] w-full">
            <img src={Himg1} className="w-full object-cover " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative h-[300px] w-full">
            <img src={Himg2} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative h-[300px] w-full">
            <img src={Himg3} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative h-[300px] w-full">
            <img src={Himg4} className="w-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
