import "./our-best.scss";

import ProductCards from "../product-cards/product-cards";

const OurBest = ({ cards }) => {
  return (
    <section className="our-best">
      <div className="container">
        <div className="our-best_wrapper">
          <h2 className="our-best_wrapper_heading">Our best</h2>
          <ProductCards cards={cards} onlyBest={true}/>
        </div>
      </div>
    </section>
  );
};

export default OurBest;
