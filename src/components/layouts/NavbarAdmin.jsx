import React from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon, XIcon, CartIcon } from "../../icon";
import LoginModalAdmin from "../../modal/LoginModalAdmin";

function NavbarAdmin() {
    const navigate = useNavigate();

    const handleAdminLogin = (e) => {
        e.prevenDefault();
        navigate("products");
    };
    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="w-[100vw] bg-accent flex items-center px-4 pr-7 ">
                    {/* div image */}
                    <div className="flex-1">
                        <img className=" w-16 h-16" src={logo} alt="logo" />
                    </div>
                    {/* div Link */}
                    <div className="flex gap-5  ">
                        <Link
                            className="font-bold h-[40px] w-[70px] text-white btn-primary bg-primary text-sm items-center justify-center flex rounded-lg p-2"
                            to={"products"}
                        >
                            สินค้า
                        </Link>
                        <Link
                            className="font-bold h-[40px] w-[70px] text-white btn-primary bg-primary text-sm items-center justify-center flex rounded-lg p-2"
                            to={"order"}
                        >
                            คำสั่งซื้อ
                        </Link>
                    </div>
                </div>

                {/* Open the modal using ID.showModal() method */}
            </div>
        </div>
    );
}

export default NavbarAdmin;
