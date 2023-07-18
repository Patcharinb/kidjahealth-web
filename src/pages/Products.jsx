import React, { useState, useEffect } from "react";
import Card from "../components/layouts/card/Card";
import axios from "axios";

function Products() {
    const buyNow = "ซื้อเลย";
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
            img={p.image}
            id={p.id}
            buyBTN={buyNow}
            name={p.productName}
            price={p.price}
            description={p.description}
        />
    ));

    return <div className="bg-white p-20 grid grid-cols-4 gap-4 ">{Cards}</div>;
}

export default Products;
