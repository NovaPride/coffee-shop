import { Component } from "react";

import "./product-cards-filter.scss"


export default class ProductCardsFilter extends Component{
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  render() {
    return (
      <div className="product-cards-filter">
        <div className="product-cards-filter_elem">
          <p className="product-cards-filter_elem_label">Looking for</p>
          <input className="product-cards-filter_elem_search" type="text" placeholder="start typing here" />
        </div> 
        <div className="product-cards-filter_elem">
          <p className="product-cards-filter_elem_label">Or filter</p>
          <button className="product-cards-filter_elem_button">Brazil</button>
          <button className="product-cards-filter_elem_button">Kenya</button>
          <button className="product-cards-filter_elem_button">Columbia</button>
        </div> 
      </div> 
    );
  }
}