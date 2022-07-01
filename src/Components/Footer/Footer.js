import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import logo from "../../images/logo 2.png";

const Footer = () => {
  return (
    <div className="text-center bg-black text-white p-5">
      <div className="flex justify-center items-center">
        <img className="w-16 border-2 rounded-full" src={logo} alt="" />
        <p className="font-semibold text-3xl ml-2">To-Do List</p>
      </div>
      <p>Get to Know Us</p>
      <div className="my-2">
        <FontAwesomeIcon
          className="mx-2 text-2xl hover:text-red-600"
          icon={faYoutube}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2 text-2xl hover:text-blue-500"
          icon={faFacebook}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2 text-2xl hover:text-cyan-400"
          icon={faTwitter}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2 text-2xl hover:text-blue-600"
          icon={faLinkedin}
        ></FontAwesomeIcon>
      </div>
      <div className="flex justify-center">
        <p className="mx-2">Terms and Conditions</p>
        <p>&</p>
        <p className="mx-2">Privacy Policy</p>
      </div>
      <p className="mt-2"> &#169; 2022 Mahadeb Seb, To-Do List</p>
    </div>
  );
};

export default Footer;
