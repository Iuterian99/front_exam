import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="row w-100">
      <div className="col-12 p-0 m-0">
        <ul className="list-unstyled d-flex justify-content-evenly align-items-center m-0">
          <li className="">
            <p className="text-light m-0 me-2 d-inline">CONTACTS</p>
            <Link
              className="tel-link me-3 text-light text-decoration-none"
              to="tel:+998998054812"
            >
              +998998054812
            </Link>
            <Link
              className="tel-link text-light text-decoration-none"
              to="tel:+998992242727"
            >
              +998992242727
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
