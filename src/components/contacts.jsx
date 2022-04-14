import React from "react";
import planet_icon from "../assets/ion_planet-sharp.svg";

const Contacts = () => {
  return (
    <section id="Contact" className="contact__container">
      <div className="contact__content">
        <div className="contact__content__heading">Contact Us</div>
        <div className="contact__content__card">
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="email" />
          <p>Message</p>
          <input type="text" />
          <button>
            Contact Us
            <img src={planet_icon} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
