import { useNavigate } from "react-router-dom";
import { login, getMe } from "../api/axiosapi";
import { useState } from "react";
import { useAuthContext } from "../hook/UseAuthContext";

export default function LoginModalAdmin() {
    const { user, setUser } = useAuthContext();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const hdlSubmit = (e) => {
        e.preventDefault();
        navigate("/products");

        // validation

        login(input)
            .then((rs) => {
                // console.log(rs.data.token)
                localStorage.setItem("accessToken", rs.data.token);
                // let token = localStorage.getItem("token");
                return getMe(rs.data.token);
            })
            .then((rs) => {
                // console.log(rs.data)
                setUser(rs.data);
            })
            .catch((err) => alert(err.response.data.error || err.message));
    };

    return (
        <>
            {/* The button to open modal */}
            <label
                htmlFor="my_modal_7"
                className="btn-primary bg-primary text-base-100 flex items-center rounded-lg text-sm p-2  h-[40px]"
            >
                เข้าสู่ระบบ
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="form-control">
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

                        <div className="form-control mt-6">
                            <button
                                className="btn btn-group"
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
    );
}
