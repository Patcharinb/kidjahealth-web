import Himg1 from "../../../assets/Himg1.png";
import { Link } from "react-router-dom";
import { DeleteIcon, SettingIcon } from "../icon";

export default function AdminProductList({ img, name, price, quantity, desc }) {
  return (
    <div className="flex justify-between">
      <h2>{img}11</h2>
      <h2>{name}22</h2>
      <h2>{desc}33</h2>
      <h2>{quantity}44</h2>
      <h2>{price}55</h2>
      <div>
        <DeleteIcon />
        <SettingIcon />
      </div>
    </div>
  );
}
