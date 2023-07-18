import React from "react";
import Himg1 from "../assets/Himg1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../hook/UseAuthContext";

export default function MyOrder() {
    const [input, setInput] = useState({
        phone: "",
        address: "",
        role: "USER",
    });
    const { cart, setCart, order, setOrder } = useAuthContext();
    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <div className=" flex-col justify-center p-5 bg-base-100">
            <div className="m-10  flex items-center justify-center">
                <p className="font-bold text-xl  ">ที่อยู่ผู้ซื้อ</p>
            </div>
            <div>
                <div className="flex justify-center ">
                    <div className="bg-accent   rounded-lg  h-[18rem] w-[50%] p-5 m">
                        <p className="pt-1 pb-1 mb-5">กรุณากรอก</p>
                        <div className="w-full ">
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="เบอร์ติดต่อ"
                                    className="input input-bordered  w-full  bg-base-100"
                                    name="phone"
                                    onChange={hdlChangeInput}
                                    value={input.phone}
                                />
                            </div>
                            <div className="w-full mt-4">
                                <textarea
                                    type="text"
                                    placeholder="ที่อยู่"
                                    className="input input-bordered  w-full h-[60px]   bg-base-100"
                                    name="address"
                                    onChange={hdlChangeInput}
                                    value={input.address}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pt-2 mt-2">
                            <button
                                className="btn-success text-base-100 rounded-lg  w-[80px]  h-[40px] "
                                // onClick={() =>
                                //     setOrder({ ...order, address, phone })
                                // }
                            >
                                ตกลง
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center  pb-5 pt-5">
                <Link
                    className="btn-success text-base-100 rounded-lg p-2"
                    to={"payment"}
                >
                    ชำระเงิน
                </Link>
            </div>
        </div>
    );
}
