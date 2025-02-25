import "./CallToAction.scss";

const CallToAciton = () => {
  return (
    <section className="callToAction">
      <div className="callToAction__container wrapper">
        <div className="callToAction__header">
          <h2>Your team. Your projects.</h2>
          <h3>Always together.</h3>
          <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</p>
        </div>
        <div className="callToAction__btns">
          <button className="btn--secondary">Start for free</button>
          <button className="btn--primary ">Request more info</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAciton;
