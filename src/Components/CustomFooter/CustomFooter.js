import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomFooter.css";
import { GoPrimitiveDot } from "react-icons/go";
import { ImTwitter } from "react-icons/im";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const CustomFooter = () => {
  var today = new Date();
  console.log(today.getFullYear());
  return (
    <div className="py-5  bg-dark customFooter ">
      <h3>Electro-inventory</h3>

      <ul className="footerNavList">
        <li>
          <Link to="">Home</Link>
        </li>
        <GoPrimitiveDot />
        <li>
          <Link to="">Inventory</Link>
        </li>
        <GoPrimitiveDot />
        <li>
          <Link to="">FAQ</Link>
        </li>
      </ul>
      <ul className="footerNavList">
        <li className="footerSocial">
          <BsFacebook />
        </li>
        <li className="footerSocial">
          <BsInstagram />
        </li>
        <li className="footerSocial">
          <ImTwitter />
        </li>
        <li className="footerSocial">
          <BsLinkedin />
        </li>
      </ul>
      <p className="copyright"> &#169; Copyright {today.getFullYear()}</p>
    </div>
  );
};

export default CustomFooter;
