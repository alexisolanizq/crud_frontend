import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <Link to={'/'}>
        <h1 className="font-black text-3xl uppercase text-center md:w-2/3 mx-auto mt-1">
            Catálogo de <span className="text-blue-700">personas</span>
        </h1>
    </Link>
);

export default Header;
