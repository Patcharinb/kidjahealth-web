import React, { useState, useEffect } from "react";

import Himg1 from "../assets/Himg1.png";
import Card from "../components/layouts/card/Card";
import axios from "axios";

function AdminHome() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8888/user/getproduct").then((rs) => {
            console.log(rs);
            setProduct(rs.data);
        });
    }, []);

    const Cards = product.map((p) => (
        <Card
            key={p.id}
            id={p.id}
            name={p.productName}
            price={p.price}
            img={p.image}
            decs={p.description}
        />
    ));

    return <div className="flex justify-center gap-5 p-5 mt-20">{Cards}</div>;
}

export default AdminHome;
