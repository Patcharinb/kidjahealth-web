import React, { useState, useEffect } from "react";
import Himg1 from "../../src/assets/Himg1.png";

import { useNavigate } from "react-router-dom";
import { getProduct } from "../api/axiosapi";
import { useAuthContext } from "../hook/UseAuthContext";
function HomePage() {
    const [dataCard, setDataCard] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        getProduct().then((rs) => setDataCard(rs.data.splice(0, 3)));
    }, []);

    const navigate = useNavigate();

    return (
        <div className="">
            <div className="p-14 flex justify-center gap-5">
                <p className="text-start text-xl">สินค้าแนะนำ</p>
            </div>

            <div className=" flex justify-around">
                {dataCard.map((el) => (
                    <div
                        id={el.id}
                        className="card card-side bg-accent shadow-xl  w-[440px] h-[240px]"
                    >
                        <div className="min-w-[220px] h-[220px] rounded-xl ">
                            <img
                                src={el.image}
                                alt="bean"
                                className=" p-2 rounded-xl w-[220px] h-[220px]"
                                id={el.id}
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="" id={el.id}>
                                <h2 className=" font-bold">{el.productName}</h2>
                                <p className=" overflow-auto h-[140px]">
                                    {el.description}
                                </p>
                            </div>
                            {user == null ? (
                                <div className="flex justify-center">
                                    <div
                                        className="btn btn-success text-base-100 flex items-center  min-w-[100px] w-[100px] "
                                        onClick={() =>
                                            alert("please log in before Buying")
                                        }
                                    >
                                        ซื้อเลย
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center">
                                    <div
                                        className="btn btn-success text-base-100 flex items-center   min-w-[100px]  w-[100px]"
                                        id={el.id}
                                        onClick={(e) =>
                                            navigate(
                                                `/products/detail/${e.target.id}`
                                            )
                                        }
                                    >
                                        ซื้อเลย
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-10 flex justify-center w-[100vw] items-center mt-10">
                <div className="h-[30rem] w-[30rem] pt-20 ">
                    <img src={Himg1} className="rounded-xl " alt="" />
                </div>
                <div className="w-[700px] pl-5 ">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia nihil aut dolorum impedit aspernatur sit quasi
                        eius alias nesciunt inventore voluptate quam expedita,
                        autem qui repudiandae culpa atque. Quod, perferendis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
