import './Logo.scss';
import Smart from '../../assets/Smart.svg';
import Zoomerr from '../../assets/Zoom.svg';
import Shells from '../../assets/Shell.svg';
import Waves from '../../assets/Waves.svg';
import ArtVenue from '../../assets/ArtVenue.svg';


const Logo = () => {
  return (
    <section className="logo">
      <div className="logo__container wrapper">
        <div className="logo__title">
            <p>Trusted by teams from leading companies</p>
        </div>
        <div className="logo__lists">
        <a href="#">
          <img src={Smart} alt="SmartFinder logo" />
          SmartFinder
        </a>
        <a href="#">
          <img src={Zoomerr} alt="Zoomerr logo" />
          Zoomerr
        </a>
        <a href="#">
          <img src={Shells} alt="Shells logo" />
          SHELLS
        </a>
        <a href="#">
          <img src={Waves} alt="Waves logo" />
          WAVES
        </a>
        <a href="#">
          <img src={ArtVenue} alt="ArtVenue logo" />
          ArtVenue
        </a>
        </div>
       
      </div>
    </section>
  );
};

export default Logo;
