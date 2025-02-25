import "./AboutTeam.scss";
import Action from "../../assets/Action.svg";

const AboutTeam = () => {
  return (
    <div className="aboutTeam">
      <div className="aboutTeam__container wrapper">
        <div className="aboutTeam__header">
          <h1>Your team. Your projects.</h1>
          <h2>Always together.</h2>
          <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</p>
        </div>
        <div className="aboutTeam__text">
          <div className="aboutTeam__content">
            <h1>Bigger team.</h1>
            <h2>More time.</h2>
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
