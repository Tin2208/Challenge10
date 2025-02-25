import "./Product.scss";
import Desktop from "../../assets/Desktop.svg";

const Product = () => {
  return (
    <section className="product">
      <div className="product__container wrapper">
        <div className="product__header wrapper">
          <div className="product__title">
            <h2>
              Diam quam tortor eget id. <br />
              Aliquet lacus volutpat tristique sed diam.
            </h2>
          </div>
        </div>

        <div className="product__img">
          <img src={Desktop} alt="desktop" />
        </div>
      </div>
    </section>
  );
};

export default Product;
