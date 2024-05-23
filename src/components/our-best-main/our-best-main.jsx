import { Component } from "react";

import "./our-best-main.scss";

import ProductCards from "../product-cards/product-cards";


export default class OurBest extends Component {
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  render() {
    const mainCardsData = this.props.cards;
    return (
      <section className="our-best">
        <div className="container">
          <div className="our-best_wrapper">
            <h2 className="our-best_wrapper_heading">Our best</h2>
              <ProductCards cards={mainCardsData}/>
          </div>
        </div>
      </section>
    );
  }
} 