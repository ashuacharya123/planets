import React from "react";
import data from "../data/planets.json";

export const Template1 = (planet) => {
  console.log(planet.id);
  console.log();
  const feature = Object.keys(data[0].features[0]);

  //   if (planet.id % 2 === 0) return;

  return (
    <div className="template__container">
      <div className="template__content">
        <div className="template__content__background">
          <div className="image">
            <div id="name">{data[0].name}</div>
            <div className="image__in">
              <img
                src={planet.props}
                alt="planet"
                id={planet.id === 0 ? "scale" : ""}
              />
            </div>
          </div>
        </div>
        <div className="template__content__features">
          <li>{feature[0]}</li>
          <li>{feature[1]}</li>
          <li>{feature[2]}</li>
          <li>{feature[3]}</li>
          <li>{feature[4]}</li>
        </div>
      </div>
    </div>
  );
};