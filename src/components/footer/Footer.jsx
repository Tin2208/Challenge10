import "./footer.scss";
import { FaArrowRight } from "react-icons/fa";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Youtube from "../../assets/Youtube.svg";
import AppStore from "../../assets/AppStore.svg";
import GooglePlay from "../../assets/GooglePlay.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <div className="footer__columns">
          <div className="footer__column">
            <h4>Categories</h4>
            <ul>
              <li>User Interface</li>
              <li>User Experience</li>
              <li>Digital Media</li>
              <li>Lifestyle</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Product</h4>
            <ul>
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>
                Accessibility <span className="beta-tag">BETA</span>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Solutions</h4>
            <ul>
              <li>Brainstorming</li>
              <li>Ideation</li>
              <li>Wireframing</li>
              <li>Research</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Resources</h4>
            <ul>
              <li>Help Center</li>
              <li>Blog</li>
              <li>Tutorials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Developers</li>
              <li>Documentation</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Events</li>
              <li>
                Request Demo
                <FaArrowRight className="footer__arrow" />
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <ul className="footer__links">
            <li>Trakor © 2023</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Manage Cookies</li>
          </ul>
          <div className="footer__socials">
            <div className="footer__apps">
              <a href="#">
                <img src={Youtube} alt="icon" />
              </a>
              <a href="#">
                <img src={Facebook} alt="icon" />
              </a>
              <a href="#">
                <img src={Twitter} alt="icon" />
              </a>{" "}
              <a href="#">
                <img src={Instagram} alt="icon" />
              </a>{" "}
              <a href="#">
                <img src={Linkedin} alt="icon" />
              </a>{" "}
            </div>
            <div className="footer__appsStore">
              <a href="#">
                <img src={AppStore} alt="icon" />
              </a>{" "}
              <a href="#">
                <img src={GooglePlay} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
