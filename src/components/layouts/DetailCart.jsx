import { deleteProductInCartApi } from "../../api/axiosapi";
export default function DetailCart({
    name,
    img,
    quantity,
    price,
    id,
    setEdit,
}) {
    const hdlDelete = async (id) => {
        await deleteProductInCartApi(id);
        setEdit(true);
    };
    return (
        <div>
            {/* bodyproduct */}
            <div className="flex justify-between p-2">
                <div className="flex  w-[280px] items-center justify-center">
                    <img
                        className="rounded-md w-[50px] h-[50px] "
                        src={img}
                        alt="image"
                    />
                </div>
                <div className="flex items-center ">
                    <p className="flex  w-[280px] items-center ">{name}</p>
                </div>
                <div className="flex  w-[280px] ">
                    <p className="flex  w-[280px] items-center pl-2">
                        {quantity}
                    </p>
                </div>
                <div className="flex items-center  ">
                    <p className="flex  items-center w-[280px] justify-start pl-2">
                        {price}
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="btn-error bg-error rounded-lg p-2 text-base-100 h-fit  "
                        onClick={() => hdlDelete(id)}
                    >
                        ลบ
                    </button>
                </div>
            </div>
        </div>
    );
}
