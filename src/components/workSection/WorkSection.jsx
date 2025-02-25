import "./WorkSection.scss";
import Work from "../../assets/work.svg";

const WorkSection = () => {
  return (
    <section className="work">
      <div className="work__container wrapper">
        <div className="work__header">
          <div className="work__title">
            <h1>Control the flow. </h1>
            <h2>Work faster.</h2>
          </div>
          <div className="work__text">
            <p>
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </p>
          </div>

          <div className="work__btn">
            <button className="btn btn--secondary">Start for free</button>
          </div>
        </div>

        <div className="work__img">
          <img src={Work} alt="work" />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
