import "./navbar.css";
import { Link } from "react-router-dom";

import BuildingImage from "../../img/building-construction-logo.jpg";

function TopHeader() {
  return (
    <div className="row w-100">
      <div className="col-12 p-0 m-0">
        <ul className="list-unstyled d-flex justify-content-evenly align-items-center m-0">
          <li className="">
            <img
              className="buildingImage"
              src={BuildingImage}
              alt=""
              width="100px"
              height="80px"
            />
          </li>
          <li className="me-2">
            <Link className="text-decoration-none text-light" to="#">
              INFO
            </Link>
          </li>
          <li className="me-2">
            <Link className="text-decoration-none text-light" to="#">
              CONTACTS
            </Link>
          </li>
          <li className="">
            <Link className="text-decoration-none text-light" to="#">
              MAIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopHeader;
