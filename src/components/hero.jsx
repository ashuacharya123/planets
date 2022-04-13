import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import planet_icon from "../assets/ion_planet-sharp.svg";

const Hero = () => {
  const [menuClick, setMenuClicked] = useState(false);

  return (
    <section className="hero__container" id="Home">
      <div className="menu" onClick={() => setMenuClicked(!menuClick)}>
        <div
          className={menuClick ? "menu__inner menu__changed" : "menu__inner "}
        ></div>
        <div
          className={menuClick ? "menu__inner menu__changed" : "menu__inner "}
        ></div>
        <div
          className={menuClick ? "menu__inner menu__changed" : "menu__inner "}
        ></div>
      </div>
      <div
        className="menu__item__container"
        id={menuClick ? "menu-animation" : ""}
      >
        <div className="menu__item">
          <a id="link" href="#Home">
            Home
          </a>
        </div>
        <div className="menu__item">
          <a id="link" href="#Contact">
            Contact
          </a>
        </div>
        <div className="menu__item">
          <a id="link" href="#Explore">
            Explore
          </a>
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__content__nav">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hero__content__middle">
          <h1 className="hero__content__heading">Get lost within the cosmos</h1>
          <h3 className="hero__content__subheading">
            Explore every planet of our solar system
          </h3>
          <h3 className="hero__content__subheading">
            Know more about the planets
          </h3>
          <div className="hero__content__smallPlanets">
            <a href="#Mercury">
              <li></li>
            </a>
            <a href="#Venus">
              <li></li>
            </a>
            <a href="#Earth">
              <li></li>
            </a>
            <a href="#Mars">
              <li></li>
            </a>
            <a href="#Jupiter">
              <li></li>
            </a>
            <a href="#Saturn">
              <li></li>
            </a>
            <a href="#Uranus">
              <li></li>
            </a>
            <a href="#Neptune">
              <li></li>
            </a>
          </div>
          <div className="hero__content__btn">
            <a href="#Explore">
              <button type="button" className="hero__content__btn__btn">
                Explore
                <img src={planet_icon} alt="planet icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
