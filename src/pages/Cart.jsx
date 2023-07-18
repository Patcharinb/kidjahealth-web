import React from "react";
import Himg1 from "../assets/Himg1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailCart from "../components/layouts/DetailCart";
import { useNavigate } from "react-router-dom";
import { uploadSlipApi, addOrder } from "../api/axiosapi";

function Cart() {
    const [edit, setEdit] = useState(false);
    const [product, setProduct] = useState([]);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [img, setImg] = useState("");
    const [file, setFile] = useState("");
    const [load, setLoad] = useState(false);
    let totalprice;
    totalprice = product.reduce(
        (acc, p) => acc + p.quantity * p.Product.price,
        0
    );

    useEffect(() => {
        axios.get(`http://localhost:8888/user/cart`).then((rs) => {
            setProduct(rs.data);
        });
    }, [edit]);

    const DetailsCart = product.map((p) => {
        return (
            <DetailCart
                id={p.productId}
                img={p.Product.image}
                name={p.Product.productName}
                quantity={p.quantity}
                price={p.Product.price}
                setEdit={setEdit}
                key={p.productId}
            />
        );
    });

    const hdSubmit = async () => {
        const formData = new FormData();
        formData.append("image", file);
        setLoad(true);
        const upload = await uploadSlipApi(formData);
        const payload = {
            cart: product,
            address,
            phone,
            totalPrice: totalprice,
            paymentSlip: upload.data,
        };
        const rs = await addOrder(payload);
        setLoad(false);
        my_modal_1.showModal();
    };

    const navigate = useNavigate();

    return (
        <div className="bg-base-100">
            <div className="">
                {/* headtitle */}
                <div className="flex justify-between pb-10 pt-5 mr-[104px]">
                    <div className="w-[280px] "></div>
                    <div className="w-[280px] text-lg font-bold flex ">
                        สินค้า
                    </div>
                    <div className="w-[280px] text-lg font-bold flex ">
                        จำนวน
                    </div>
                    <div className="w-[280px] text-lg font-bold flex ">
                        ราคา
                    </div>
                </div>
                {/* bodyproduct */}

                <div className="h-[200px] overflow-auto">{DetailsCart}</div>
                <div>
                    <div className="flex gap-4 ml-2 text-sm font-bold">
                        <span>ยอดรวมทั้งหมด</span>
                        <span>{totalprice}</span>
                    </div>
                </div>
            </div>
            {/* address */}
            <div className=" flex-col justify-center p-5 bg-base-100">
                <div>
                    <div className="flex justify-center ">
                        <div className="bg-accent   rounded-lg  w-[500px] p-5 m">
                            <p className="pt-1 pb-1 mb-5">กรุณากรอกที่อยู่</p>
                            <div className="w-full ">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        placeholder="เบอร์ติดต่อ"
                                        className="input input-bordered  w-full  bg-base-100"
                                        name="phone"
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        value={phone}
                                    />
                                </div>
                                <div className="w-full mt-4">
                                    <textarea
                                        type="text"
                                        placeholder="ที่อยู่"
                                        className="input input-bordered  w-full h-[60px]   bg-base-100"
                                        name="address"
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        value={address}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="bg-accent">
                    <div className="hero-content flex-col lg:flex-row gap-20">
                        <img
                            src={img}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-2xl font-bold pb-5">
                                แนบหลักฐานการชำระเงิน
                            </h1>

                            <input
                                type="file"
                                placeholder=""
                                className="input input-bordered"
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    setImg(
                                        URL.createObjectURL(e.target.files[0])
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <span className="flex justify-center items-center pb-4 pt-4 gap-40">
                    {load ? (
                        <button className="btn">
                            <span className="loading loading-spinner"></span>
                            รอประมวลผล
                        </button>
                    ) : (
                        <div
                            className="btn-success rounded-lg p-2  bg-success text-base-100"
                            onClick={hdSubmit}
                        >
                            ยืนยันการสั่งซื้อ
                        </div>
                    )}
                </span>
            </div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <p className="py-4 w-full flex justify-center">
                        สั่งซื้อสินค้าสำเร็จ
                    </p>
                </form>
            </dialog>
        </div>
    );
}

export default Cart;
