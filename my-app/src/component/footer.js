import React from "react";
import "./footer.css";
import { BsLinkedin, BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <div className="icon-group">
        <div className="content">
          <h3 className="heading">About The Educademy LLP</h3>
          <p className="description">
            Educademy Llp is a Limited Liability Partnership firm incorporated
            on 03 October 2018.
          </p>
        </div>
        <a
          className="footer-icons"
          href="https://www.facebook.com/learnwitheducademy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook fontSize="30px" />
        </a>
        <a
          className="footer-icons"
          href="https://www.linkedin.com/jobs/view/frontend-developer-at-educademy-llp-3665339049/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin fontSize="30px" />
        </a>
        <div className="icons">
          <CiLocationOn fontSize="24px" />
          <span className="text">
            {" "}
            Zirakpur NA SAS Nagar Mohali Punjab 140603
          </span>
        </div>
        <div>
          <BsFillTelephoneFill fontSize="20px" />
          <span className="text">+155 123456</span>
        </div>
        <div>
          <AiOutlineMail fontSize="20px" />
          <span className="text">educademy@123gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
