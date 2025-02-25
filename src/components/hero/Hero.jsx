import "./Hero.scss";
import Spapes from "../../assets/Shapes.svg";

import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__title">
          <p>Team Progress Tracking Tool</p>
        </div>
        <div className="hero__content">
          <h1>Track your team progress</h1>
          <p>
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. <br />
            Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <div className="hero__buttons">
            <button className="btn--secondary">Start for free</button>
            <button className="btn--primary">Request more info</button>
          </div>
        </div>

        <div>
          <div className="hero__shapes">
            <img src={Spapes} alt="shapes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
