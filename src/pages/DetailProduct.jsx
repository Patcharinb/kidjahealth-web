import React, { useState, useEffect } from "react";
import Himg1 from "../assets/Himg1.png";
import { Link, useParams } from "react-router-dom";
import { keepToCartApi } from "../api/axiosapi";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetailProduct({}) {
    const [product, setProduct] = useState([]);
    const [amount, setAmount] = useState(1);
    const { id } = useParams();

    const navigate = useNavigate();

    const handleOnclickPlus = (e) => {
        setAmount(+amount + 1);
    };
    const handleOnclickMinus = (e) => {
        if (amount > 0) {
            setAmount(+amount - 1);
        }
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8888/user/getProductById/${id}`)
            .then((rs) => {
                console.log(rs);
                setProduct(rs.data);
            });
    }, []);

    const keepToCart = (e) => {
        keepToCartApi({
            productId: id,
            quantity: amount,
        }).then((rs) => {
            navigate("/products");
        });
    };

    return (
        <>
            <div className="">
                <div className="flex justify-center gap-10 p-10 m-6 h-[25rem]">
                    {/* left */}
                    <img
                        className="rounded-md w-[35%] "
                        src={product.image}
                        alt="imgproduct"
                    />
                    {/* right */}
                    <div className=" bg-accent w-[50%] rounded-md p-5">
                        <div className=" pb-10 pt-10">
                            <p className="text-xl font-semibold">
                                {product.productName}
                            </p>
                        </div>
                        <div className="ราคาสินค้า ">
                            <p className="text-base">ราคา</p>
                            <p className="text-xl font-bold">
                                {product.price}{" "}
                            </p>
                        </div>

                        <div className="flex justify-center pt-10">
                            <div className="flex mr-10">
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button
                                        name="minus"
                                        onClick={handleOnclickMinus}
                                        data-action="decrement"
                                        class=" bg-gray-50 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-[60px] rounded-l cursor-pointer outline-none"
                                    >
                                        <span class="m-auto text-2xl font-thin">
                                            −
                                        </span>
                                    </button>
                                    <input
                                        type="text"
                                        class="outline-none focus:outline-none text-center w-[60px] bg-gray-50 font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700 "
                                        name="amount"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value)
                                        }
                                    ></input>
                                    <button
                                        name="plus"
                                        onClick={handleOnclickPlus}
                                        data-action="increment"
                                        class="bg-gray-50 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-[60px] rounded-r cursor-pointer"
                                    >
                                        <span
                                            id="+"
                                            class="m-auto text-2xl font-thin"
                                        >
                                            +
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="btn btn-success text-base-100 h-[35px] "
                                onClick={keepToCart}
                            >
                                หยิบใส่ตะกร้า
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* button */}
            <div className="flex justify-center items-center pb-5">
                <div className=" bg-accent rounded-md  h-[20rem] w-[79%] p-4">
                    <div className="text-lg">
                        <p>คุณสมบัติ</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailProduct;
