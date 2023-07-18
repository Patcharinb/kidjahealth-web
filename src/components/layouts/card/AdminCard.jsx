import React, { useState } from "react";
import { DeleteIcon, SettingIcon, XIcon } from "../../../icon";
import {
    deleteProductApi,
    updateProductApi,
    uploadImageApi,
} from "../../../api/axiosapi";
import { useNavigate } from "react-router-dom";

function AdminCard({ id, name, price, description, quantity, img }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [image, setImg] = useState(img);
    const [file, setFile] = useState("");
    const [load, setLoad] = useState(false);
    const [input, setInput] = useState({
        productName: name,
        description,
        price,
        quantity,
    });
    const hdlDelete = async (id) => {
        await deleteProductApi(id);
        navigate(0);
    };

    const hdlUpdate = async (e, id) => {
        e.preventDefault();
        await updateProductApi(id, input);
        const formData = new FormData();
        formData.append("image", file);
        setLoad(true);
        const upload = await uploadImageApi(id, formData);
        setLoad(false);
        navigate(0);
        setShowModal(false);
    };

    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <tr>
            <td>
                <div>
                    <div className="font-bold">{id}</div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3 ">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {description}
                <br />
            </td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">{price}</button>
            </th>
            <th>
                <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => hdlDelete(id)}
                >
                    <DeleteIcon />
                </button>
            </th>
            <th>
                <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => setShowModal(true)}
                >
                    <SettingIcon />
                </button>
                {showModal ? (
                    <form
                        className="z-50 w-screen h-screen fixed top-0 left-0 flex justify-center items-center"
                        onSubmit={(e) => hdlUpdate(e, id)}
                    >
                        {/* <h1 className="font-bold text-lg flex justify-center">Login</h1> */}
                        <div className="">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left"></div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 overflow-hidden">
                                    <div className=" h-10 flex flex-row justify-end  bg-accent">
                                        <button
                                            onClick={() => setShowModal(false)}
                                        >
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
                                                value={input.productName}
                                                name="productName"
                                                onChange={(e) =>
                                                    hdlChangeInput(e)
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
                                                value={input.description}
                                                name="description"
                                                onChange={(e) =>
                                                    hdlChangeInput(e)
                                                }
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label ">
                                                ราคา
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="input input-bordered"
                                                value={input.price}
                                                name="price"
                                                onChange={(e) =>
                                                    hdlChangeInput(e)
                                                }
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label ">
                                                จำนวน
                                            </label>
                                            <input
                                                type="number"
                                                placeholder=""
                                                className="input input-bordered"
                                                value={input.quantity}
                                                name="quantity"
                                                onChange={(e) =>
                                                    hdlChangeInput(e)
                                                }
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label ">
                                                รูปสินค้า
                                            </label>
                                            <img
                                                src={image}
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
                                                <button className="btn-success text-base-100 rounded-lg p-2">
                                                    ยืนยัน
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action"></div>
                    </form>
                ) : (
                    <></>
                )}
            </th>
        </tr>
    );
}

export default AdminCard;
