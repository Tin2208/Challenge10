import "./Testimonial.scss";
import Zoommer from "../../assets/Zoom.svg";
import UserZoom from "../../assets/UserZoom.svg";
import Shells from "../../assets/Shell.svg";
import UserShells from "../../assets/UserShell.svg";
import ArtVenue from "../../assets/ArtVenue.svg";
import UserArtVuene from "../../assets/UserArt.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="testimonialSection">
      <div className="testimonialSection__container wrapper">
        <div className="testimonialSection__header">
          <h1>Our partners. Our Friends.</h1>
          <h2>They love us.</h2>
          <p>Sem malesuada sed lectus id nunc mattis est eget tincidunt.</p>
        </div>
        <div className="testimonialSection__lists">
          <div className="testimonialSection__card">
            <div className="testimonialSection__card--header">
              <img src={Zoommer} alt="" />
              <p>Zommer</p>
            </div>
            <div className="testimonialSection__card--content">
              <span>
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor.
              </span>
            </div>
            <div className="testimonialSection__card--footer">
              <div className="testimonialSection__card--img">
                <img src={UserZoom} alt="users" />
              </div>
              <div className="testimonialSection__card--infors">
                <span>Hellen Jummy</span>
                <p>Team Lead</p>
              </div>
            </div>
          </div>
          <div className="testimonialSection__card">
            <div className="testimonialSection__card--header">
              <img src={Shells} alt="Shells" />
              <p>SHELLS</p>
            </div>
            <div className="testimonialSection__card--content">
              <span>
                Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                amet enim. Sit purus venenatis velit semper lectus sed ornare
                quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet
                a vitae.
              </span>
            </div>
            <div className="testimonialSection__card--footer">
              <div className="testimonialSection__card--img">
                <img src={UserShells} alt="users" />
              </div>
              <div className="testimonialSection__card--infors">
                <span>Hellena John</span>
                <p>Co-founder</p>
              </div>
            </div>
          </div>
          <div className="testimonialSection__card">
            <div className="testimonialSection__card--header">
              <img src={ArtVenue} alt="art venue" />
              <p>ArtVenue</p>
            </div>
            <div className="testimonialSection__card--content">
              <span>
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </span>
            </div>
            <div className="testimonialSection__card--footer">
              <div className="testimonialSection__card--img">
                <img src={UserArtVuene} alt="users" />
              </div>
              <div className="testimonialSection__card--infors">
                <span>David Oshodi</span>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonialSection__footer">
          <button className="">
            <FaArrowLeft /> Prev
          </button>
          <button className="">
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
