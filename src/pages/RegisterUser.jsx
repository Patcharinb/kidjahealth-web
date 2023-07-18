import React from "react";
import { useAuthContext } from "../hook/UseAuthContext";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { registerFn } = useAuthContext();

    const hdlChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const hdlSubmit = async (e) => {
        //  { firstName, lastName, email, password, role, confirmPassword }
        // input

        e.preventDefault();
        await registerFn(input);
        navigate("/products");
    };

    return (
        <div className="bg-base-100">
            <form action="" onSubmit={hdlSubmit}>
                <p className="text-lg font-bold p-5 flex justify-center gap-4 ">
                    ลงทะเบียน
                </p>
                <div className="flex flex-col justify-center items-center p-4 gap-4">
                    <input
                        type="text"
                        placeholder="ชื่อ"
                        className="input input-bordered  w-full max-w-xs  bg-accent"
                        name="firstName"
                        onChange={hdlChangeInput}
                        value={input.firstName}
                    />
                    <input
                        type="text"
                        placeholder="นามสกุล"
                        className="input input-bordered w-full max-w-xs bg-accent"
                        name="lastName"
                        onChange={hdlChangeInput}
                        value={input.lastName}
                    />
                    <input
                        type="text"
                        placeholder="อีเมล"
                        className="input input-bordered w-full max-w-xs bg-accent"
                        name="email"
                        onChange={hdlChangeInput}
                        value={input.email}
                    />
                    <input
                        type="text"
                        placeholder="รหัสผ่าน"
                        className="input input-bordered w-full max-w-xs bg-accent"
                        name="password"
                        onChange={hdlChangeInput}
                        value={input.password}
                    />
                    <input
                        type="text"
                        placeholder="ยืนยันรหัสผ่าน"
                        className="input input-bordered w-full max-w-xs bg-accent"
                        name="confirmPassword"
                        onChange={hdlChangeInput}
                        value={input.confirmPassword}
                    />
                    <button
                        className="btn-success text-base-100 rounded-lg p-2  w-[80px] mt-2"
                        onClick={hdlSubmit}
                    >
                        ตกลง
                    </button>
                </div>
            </form>
        </div>
    );
}
