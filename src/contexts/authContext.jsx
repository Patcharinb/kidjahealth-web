import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { getMe, registerApi } from "../api/axiosapi";

const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState({});

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) return;
        getMe(token).then((rs) => {
            setUser(rs.data);
        });
    }, []);

    async function registerFn(input) {
        const res = await registerApi(input);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, setUser, logout, registerFn, cart, setCart }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
