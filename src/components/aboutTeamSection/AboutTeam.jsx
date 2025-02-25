import "./AboutTeam.scss";
import Action from "../../assets/Action.svg";

const AboutTeam = () => {
  return (
    <div className="aboutTeam">
      <div className="aboutTeam__container wrapper">
        <div className="aboutTeam__header">
          <div className="aboutTeam__header--title">
            <h2>Your team. Your projects.</h2>
            <h3>Always together.</h3>
          </div>

          <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</p>
        </div>
        <div className="aboutTeam__text">
          <div className="aboutTeam__content">
            <div className="aboutTeam__content--title">
              <h2>Bigger team.</h2>
              <h3>More time.</h3>
            </div>
            <p>
              Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
              ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus
              integer et et diam malesuada. Sed tortor orci mauris proin ac.
              Venenatis euismod mauris quis sit purus nisi. Sed quis eget augue
              ut aliquam sed.
            </p>
            <span>
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            </span>
          </div>

          <div className="aboutTeam__img">
            <img src={Action} alt="Action" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
