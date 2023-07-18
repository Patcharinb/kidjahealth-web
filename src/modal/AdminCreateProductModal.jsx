import { XIcon } from "../icon";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProductApi, uploadImageApi } from "../api/axiosapi";

export default function AdminCreateProductModal() {
    const [showModal, setShowModal] = useState(false);
    const [productName, setProductName] = useState("");
    const [detailProduct, setDetailProduct] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [img, setImg] = useState("");
    const [file, setFile] = useState("");
    const [load, setLoad] = useState(false);

    const navigate = useNavigate();

    const createProduct = async (e) => {
        e.preventDefault();
        const body = {
            productName: productName,
            description: detailProduct,
            price: price,
            quantity: quantity,
        };
        const rs = await createProductApi(body);
        const formData = new FormData();
        formData.append("image", file);
        setLoad(true);
        const upload = await uploadImageApi(rs.data.id, formData);
        setShowModal(false);
        navigate(0);
    };

    return (
        <>
            <button
                className="btn-success bg-success text-base-100 p-2 rounded-lg "
                onClick={() => setShowModal(true)}
            >
                เพิ่มสินค้า
            </button>
            {showModal ? (
                <form className="z-50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                    {/* <h1 className="font-bold text-lg flex justify-center">Login</h1> */}
                    <div className="">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left"></div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 overflow-hidden">
                                <div className=" h-10 flex flex-row justify-end  bg-accent">
                                    <button onClick={() => setShowModal(false)}>
                                        <XIcon className="w-8 h-8  mr-3 mt-3 cursor-pointer " />
                                    </button>
                                </div>
                                <div className="card-body bg-accent">
                                    <div className="form-control">
                                        <label className="label">
                                            ชื่อสินค้า
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="input input-bordered"
                                            value={productName}
                                            onChange={(e) =>
                                                setProductName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            รายละเอียดสินค้า
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="input input-bordered"
                                            value={detailProduct}
                                            onChange={(e) =>
                                                setDetailProduct(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label ">ราคา</label>
                                        <input
                                            type="number"
                                            placeholder=""
                                            className="input input-bordered"
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label ">จำนวน</label>
                                        <input
                                            type="number"
                                            placeholder=""
                                            className="input input-bordered"
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label ">
                                            รูปสินค้า
                                        </label>
                                        <img
                                            src={img}
                                            className="w-40 h-40"
                                        ></img>
                                        <input
                                            type="file"
                                            placeholder=""
                                            className="input input-bordered"
                                            onChange={(e) => {
                                                setFile(e.target.files[0]);
                                                setImg(
                                                    URL.createObjectURL(
                                                        e.target.files[0]
                                                    )
                                                );
                                            }}
                                        />
                                    </div>
                                    {load ? (
                                        <button className="btn">
                                            <span className="loading loading-spinner"></span>
                                            รอผล
                                        </button>
                                    ) : (
                                        <div className="form-control mt-6 ">
                                            <button
                                                className="btn-success bg-success p-2 rounded-lg text-base-100"
                                                onClick={(e) =>
                                                    createProduct(e)
                                                }
                                            >
                                                ยืนยัน
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        {/* <button className="btn">Close</button> */}
                    </div>
                </form>
            ) : (
                <></>
            )}
        </>
    );
}
