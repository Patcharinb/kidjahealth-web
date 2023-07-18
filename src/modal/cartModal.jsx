import { CartIcon } from "../icon";

export default function cartModal() {
    return (
        <div>
            <CartIcon
                className="btn-primary w-[4rem] bg-primary"
                onClick={() => window.cartModal.showModal()}
            />
            {/* Open the modal using ID.showModal() method */}
            <button
                className="btn"
                onClick={() => window.cartModal.showModal()}
            >
                open modal
            </button>
            <dialog id="cartModal" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                        Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
}
