import React from "react";
import { Link } from "react-router-dom";
import Himg1 from "../assets/Himg1.png";

function Payment() {
  return (
    <div className="bg-gray-50 ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={Himg1} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold pb-5">แนบหลักฐานการชำระเงิน</h1>

            <button className="btn btn-primary  ">อัพโหลดรูป</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
