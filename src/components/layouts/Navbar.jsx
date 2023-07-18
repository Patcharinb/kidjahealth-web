import React from "react";
import logo from "../../assets/logo.png";
import { UserIcon, CartIcon, XIcon } from "../../icon";
import { Link } from "react-router-dom";
import cartModal from "../../modal/cartModal";
import LoginModalUser from "../../modal/LoginModalUser";

function Navbar() {
    return (
        <div className="w-[100vw] bg-accent   flex justify-between  items-center px-4 pr-10">
            <img className=" w-16 h-16" src={logo} alt="logo" />
            <div className="flex justify-between gap-6">
                <Link to={"home"}>หน้าหลัก</Link>
                <Link to={"products"}>สินค้า</Link>
                <Link>บทความ</Link>
                <Link>ติดต่อ</Link>
            </div>

            <div className="flex justify-end gap-8">
                <LoginModalUser />
                <div>
                    <Link to={"cart"}>
                        <CartIcon className="btn-primary flex items-center rounded-lg text-sm p-2  h-[40px] w-[50px] text-white  bg-primary  " />
                    </Link>
                </div>
            </div>

            {/* Open the modal using ID.showModal() method */}
        </div>
    );
}

export default Navbar;
