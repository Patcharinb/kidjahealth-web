import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import lisong from "../assets/lisong.png";
import AdminCreateProductModal from "../modal/AdminCreateProductModal";
import { DeleteIcon, SettingIcon } from "../icon";
import { getProduct } from "../api/axiosapi";
import Himg1 from "../assets/Himg1.png";
import axios from "axios";
import Card from "../components/layouts/card/Card";
import AdminCard from "../components/layouts/card/AdminCard";

function AdminProducts() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8888/admin/getproduct").then((rs) => {
            console.log(rs.data);
            setProduct(rs.data);
        });
    }, []);

    const AdminCards = product.map((p) => (
        <AdminCard
            key={p.id}
            id={p.id}
            name={p.productName}
            price={p.price}
            quantity={p.quantity}
            description={p.description}
            img={p.image}
        />
    ));
    return (
        <div>
            <div className="flex justify-end p-5">
                <AdminCreateProductModal />
            </div>
            {/* <div className="m-6">
        <div className="flex justify-between">
          <h1>รูปสินค้า</h1>
          <h1>สินค้า</h1>
          <h1>รายละเอียดสินค้า</h1>
          <h1>จำนวน</h1>
          <h1>ราคา</h1>
          <h1>แก้ไข</h1>
        </div>
      </div> */}
            <div className="overflow-x-auto px-10">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>รูปสินค้า สินค้า</th>
                            <th>รายละเอียดสินค้า</th>
                            <th>จำนวน</th>
                            <th>ราคา</th>
                            <th>ลบ</th>
                            <th>แก้ไข</th>
                        </tr>
                    </thead>
                    {/* row 1 */}

                    {AdminCards}
                </table>
            </div>
        </div>
    );
}

export default AdminProducts;
