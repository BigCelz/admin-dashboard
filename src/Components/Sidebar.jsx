import React from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { AiFillCustomerService } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import './Styles.css';

function Sidebar() {
  return (
    <div className="sidebar bg-white p-2">
      <div className="m-2">
        <IoLogoBuffer />
        <span className="brand-name fs-4">Celz</span>
      </div>
      <hr className="text-dark"/>
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item py-2 my-2">
          <IoMdSpeedometer className="speedometer fs-5 me-3" />
          <span >Dashboard</span>
        </a>

        <a href="/" className="list-group-item py-2 my-2">
          <FaHome  className="speedometer fs-5 me-3" />
          <span >Home</span>
        </a>

        <a href="/" className="list-group-item py-2 my-2">
          <MdOutlineProductionQuantityLimits className="speedometer fs-5 me-3" />
          <span >Product</span>
        </a>

        <a href="/" className="list-group-item py-2 my-2">
          <TbReportSearch className="speedometer fs-5 me-3" />
          <span >Report</span>
        </a>

        <a href="/" className="list-group-item py-2 my-2">
          <AiFillCustomerService className="speedometer fs-5 me-3" />
          <span >Customer</span>
        </a>

        <a href="/" className="list-group-item py-2 my-2">
          <MdLogout className="speedometer fs-5 me-3" />
          <span >Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
