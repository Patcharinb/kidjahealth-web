import { XIcon, UserIcon } from "../icon";
import { Link, useNavigate } from "react-router-dom";
import { login, getMe } from "../api/axiosapi";
import { setToken, getToken } from "../utils/localStorage";
import { createContext, useState, useContext, useEffect } from "react";
import { useAuthContext } from "../hook/UseAuthContext";

export default function LoginModal() {
    const { user, setUser } = useAuthContext();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const hdlRegisterForm = (e) => {
        e.preventDefault();
        navigate("/register");
        setShowModal(false);
    };

    const hdlSubmit = (e) => {
        e.preventDefault();

        login(input)
            .then((rs) => {
                setToken(rs.data.token);
                return getMe(rs.data.token);
            })
            .then((rs) => {
                setUser(rs.data);
                if (rs.data.role === "USER") {
                    navigate("/products");
                    setShowModal(false);
                } else {
                    navigate("/admin/products");
                }
            })
            .catch((err) => alert(err.response.data.error || err.message));
    };
    return (
        <>
            {user ? null : (
                <label
                    htmlFor="my_modal_7"
                    className="btn-primary bg-primary text-base-100 flex items-center rounded-lg text-sm p-2  h-[40px] "
                    onClick={() => setShowModal(true)}
                >
                    ลงทะเบียน/เข้าสู่ระบบ
                </label>
            )}

            {showModal ? (
                <>
                    <input
                        type="checkbox"
                        id="my_modal_7"
                        className="modal-toggle"
                    />
                    <div className="modal ">
                        <div className="modal-box bg-base-100">
                            <div className="form-control ">
                                <span className="label-text">อีเมล</span>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered"
                                    onChange={hdlChangeInput}
                                    value={input.email}
                                    name="email"
                                />
                                <span className="label-text">รหัสผ่าน</span>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="input input-bordered"
                                    onChange={hdlChangeInput}
                                    value={input.password}
                                    name="password"
                                />
                                <div className="form-control mt-6 ">
                                    <button
                                        className="btn btn-success text-base-100"
                                        type="button"
                                        onClick={hdlRegisterForm}
                                    >
                                        ลงทะเบียน
                                    </button>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        className="btn btn-success text-base-100"
                                        onClick={hdlSubmit}
                                    >
                                        เข้าสู่ระบบ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">
                            Close
                        </label>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
