import { useAuthContext } from "../../../hook/UseAuthContext";
import Himg1 from "../../../assets/Himg1.png";
import { Link } from "react-router-dom";

export default function Card({ buyBTN, name, price, id, description, img }) {
    const { user } = useAuthContext();

    console.log(user);

    return (
        <div className="card bg-accent shadow-xl  ">
            <figure className="px-10 pt-10 w-full">
                <img
                    src={img}
                    alt="image"
                    className="w-90   h-60 object-contain "
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title items-start text-start font-bold">
                    {name}
                </h2>

                <p className="items-start text-start"> {description}</p>

                <p className="items-start text-start" value={id}>
                    {price}
                </p>

                <div className="card-actions flex justify-center">
                    {user == null ? (
                        <>
                            <div
                                className="btn btn-success text-base-100"
                                onClick={() =>
                                    alert("please log in before Buying")
                                }
                            >
                                {buyBTN}
                            </div>
                        </>
                    ) : (
                        <Link
                            className="btn btn-success text-base-100"
                            to={`detail/${id}`}
                        >
                            {buyBTN}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
