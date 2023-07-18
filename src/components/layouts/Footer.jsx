import React from "react";
import { FacebookIcon, IgIcon, LineIcon } from "../../icon";

export default function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-accent text-base-content">
            <div className="flex justify-between gap-6">
                <IgIcon />
                <FacebookIcon />
                <LineIcon />
            </div>
        </footer>
    );
}
