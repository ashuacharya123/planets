import React from "react";
import logo from "../../assets/Logo.svg";

const hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__content">
        <div className="hero__content__nav">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hero__content__middle">
          <h1 className="hero__content__heading"></h1>
          <h3 className="hero__content__subheading"></h3>
          <h3 className="hero__content__subheading"></h3>
          <div className="hero__content__smallPlanets"></div>
          <div className="hero__content__btn"></div>
        </div>
      </div>
    </section>
  );
};

export default hero;
