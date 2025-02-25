import "./CallToAction.scss";

const CallToAciton = () => {
  return (
    <section className="callToAction">
      <div className="callToAction__container wrapper">
        <div className="callToAction__header">
          <h1>Your team. Your projects.</h1>
          <h2>Always together.</h2>
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
