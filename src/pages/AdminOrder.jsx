import React from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import { useState } from "react";
import { useEffect } from "react";
import { getOrder } from "../api/axiosapi";

function AdminOrder() {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getOrder().then((rs) => {
            setOrder(rs.data);
        });
    }, []);
    console.log(order);

    const orders = order.map((el) => {
        const product = el.OrderItems.map((p) => (
            <p>
                {p.Product.productName} # {p.quantity}
            </p>
        ));

        return (
            <div className="grid grid-rows-1 grid-cols-4 pl-20 pt-5">
                <div className="flex justify-start items-start">
                    <p>{el.id}</p>
                </div>
                <div className="flex justify-start items-start">
                    <p>{el.phone}</p>
                </div>
                <div className="flex justify-start items-start">
                    <p> {el.address}</p>
                </div>
                <div className="flex justify-start items-start flex-col">
                    {product}
                </div>
            </div>
        );
    });

    return (
        <div>
            <Link to={AdminHome} />

            <div className="grid grid-rows-1 grid-cols-4 gap-20 p-5 pl-20 ">
                <div className="flex justify-start items-start">
                    <p className="font-semibold ">id</p>
                </div>
                <div className="flex justify-start items-start">
                    <p className="font-semibold">เบอร์โทรศัพท์</p>
                </div>
                <div className="flex justify-start items-start">
                    <p className="font-semibold">ที่อยู่</p>
                </div>
                <div className="flex justify-start items-start">
                    <p className="font-semibold">สินค้า/จำนวน</p>
                </div>
            </div>
            <div className=" flex justify-center">
                <hr className="bg-black w-[95%] " />
            </div>

            {/* รายละเอียดการสั่งซื้อ */}
            {orders}
        </div>
    );
}

export default AdminOrder;
