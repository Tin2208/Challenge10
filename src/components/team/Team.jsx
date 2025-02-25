import "./Team.scss";
import TeamTool from "../../assets/TeamTool.svg";
import Select from "../../assets/Select.svg";
import Management from "../../assets/Management.svg";
import Chart from "../../assets/GraphStyle.svg";

const Team = () => {
  return (
    <div className="team">
      <div className="team__container wrapper">
        <div className="team__tool">
          <div className="tool__img">
            <img src={TeamTool} alt="Team Tool" />
          </div>
          <div className="tool__content">
            <div className="tool__header">
              <h1>Powerful tools.</h1>
              <h2>More control.</h2>
            </div>
            <div className="tool__text">
              <p>
                Scelerisque auctor dolor diam tortor, fames faucibus non
                interdum nunc. <br /> Ultrices nibh sapien elit gravida ac,
                rutrum molestie adipiscing lacinia.
              </p>
            </div>
            <div className="tool__list">
              <ul>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Interdum volutpat turpis malesuada ac turpis.
                </li>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Tortor ipsum pretium quis nunc.
                </li>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Vitae odio a id purus in.
                </li>
              </ul>
              <div className="tool_btn">
                <button className="tool__btn btn--secondary">
                  Start for free
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="team__tool">
          <div className="tool__content">
            <div className="tool__header">
              <h1>Team management.</h1>
              <h2>Effortless syncronization.</h2>
            </div>
            <div className="tool__text">
              <p>
                Massa nunc nisi fames adipiscing scelerisque placerat et
                sagittis cursus. Mi commodo id maecenas amet, elementum a, in.
              </p>
            </div>
            <div className="tool__list">
              <ul>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Est et in pharetra magna adipiscing ornare aliquam.
                </li>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </li>
                <li className="tool__lists">
                  <img src={Select} alt="Select" className="tool__select" />
                  Ullamcorper ornare in et egestas dolor orci.
                </li>
              </ul>
              <div className="tool_btn">
                <button className="tool__btn btn--secondary">
                  Start for free
                </button>
              </div>
            </div>
          </div>
          <div className="tool__img">
            <img src={Management} alt="Management" />
          </div>
        </div>

        <div className="team__footer">
          <div className="footer__content">
            <h3>
              Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
            </h3>
            <p>
              Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse
              habitant elementum dignissim arcu mauris. Ullamcorper euismod id
              commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien
              at pellentesque.
            </p>
            <div className="footer__btn">
              <button className="btn--primary">Request more info</button>
            </div>
          </div>
          <div className="footer__img">
            <img src={Chart} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
