import React from "react";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__image">
          <img src={logo} alt="logo" />
        </div>
        <p className="footer__content__paragraph">Copyright 2022 planets.org</p>
      </div>
    </div>
  );
};

export default Footer;
