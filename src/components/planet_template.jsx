import React from "react";
import data from "../data/planets.json";

export const Template1 = (planet) => {
  // console.log(planet.id);
  // console.log(Object.values(data[planet.id].features[0])[0]);
  const feature = Object.keys(data[planet.id].features[0]);
  const point = Object.values(data[planet.id].features[0]);

  let rowReverse = false;
  if (planet.id % 2 !== 0) rowReverse = true;

  return (
    <div className="template__container">
      <div className="template__content" id={rowReverse ? "rowReverse" : ""}>
        <div className="template__content__background">
          <div className="image" id={data[planet.id].name}>
            <div id="name">{data[planet.id].name}</div>
            <div className="image__in" number={planet.id === 0 ? "1" : ""}>
              <img
                src={planet.props}
                alt="planet"
                id={planet.id === 0 ? "scale" : ""}
              />
            </div>
          </div>
        </div>
        <div className="template__content__features">
          <div className="template__content__features__card">
            <div className="template__content__features__card__count">1</div>
            <li>{feature[0]}</li>
            <p>{point[0]}</p>
          </div>
          <div className="template__content__features__card" number="2">
            <div className="template__content__features__card__count">2</div>
            <li>{feature[1]}</li>
            <p>{point[1]}</p>
          </div>
          <div className="template__content__features__card" number="3">
            <div className="template__content__features__card__count">3</div>
            <li>{feature[2]}</li>
            <p>{point[2]}</p>
          </div>
          <div className="template__content__features__card">
            <div className="template__content__features__card__count">4</div>
            <li>{feature[3]}</li>
            <p>{point[3]}</p>
          </div>
          <div className="template__content__features__card">
            <div className="template__content__features__card__count">5</div>
            <li>{feature[4]}</li>
            <p>{point[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
