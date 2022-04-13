import React, { useState } from "react";
import { Template1 } from "./planet_template";
import mercury from "../assets/mercury.png";
import venus from "../assets/venus.png";
import earth from "../assets/earth.png";
import mars from "../assets/mars.png";
import jupiter from "../assets/jupiter.png";
import saturn from "../assets/saturn.png";
import uranus from "../assets/uranus.png";
import neptune from "../assets/neptune.png";

const Planets = () => {
  const oddPlanets = [
    [mercury],
    [venus],
    [earth],
    [mars],
    [jupiter],
    [saturn],
    [uranus],
    [neptune],
  ];

  let counter = 0;
  let i = 0;

  return (
    <section id="Explore" className="planets__container">
      <div className="planets__content">
        {oddPlanets.map((planet) => {
          return (
            <>
              <Template1 props={planet[i]} id={counter} />
              {<div id="counter">{counter++}</div>}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Planets;
