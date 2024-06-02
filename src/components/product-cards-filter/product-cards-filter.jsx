import { Component } from "react";

import "./product-cards-filter.scss"


export default class ProductCardsFilter extends Component{
  constructor(props) {
    super(props);
   
    this.state = {
      promt : "",
      country : "",
    }
  }

  onUpdateSearch = e => {
    const promt = e.target.value;
    this.setState({promt});
    this.props.setPromt(promt);
  }

  onUpdateCountry = e => {
    const country = e.target.dataset.country;
    e.target.parentElement.childNodes.forEach(node => node.classList.remove("product-cards-filter_elem_button_active"))
    if(country === this.state.country) {
      this.setState(({country}) => {return{country: ""}});
      this.props.setCountry("");
    } else {
      e.target.classList.add("product-cards-filter_elem_button_active")
      this.setState({country});
      this.props.setCountry(country);
    }
  }

  render() {
    return (
      <div className="product-cards-filter">
        <div className="product-cards-filter_elem">
          <p className="product-cards-filter_elem_label">Looking for</p>
          <input className="product-cards-filter_elem_search" type="text" placeholder="start typing here" value={this.state.promt} onChange={this.onUpdateSearch}/>
        </div> 
        <div className="product-cards-filter_elem">
          <p className="product-cards-filter_elem_label">Or filter</p>
          <button className="product-cards-filter_elem_button" onClick={this.onUpdateCountry} data-country="brazil">Brazil</button>
          <button className="product-cards-filter_elem_button" onClick={this.onUpdateCountry} data-country="kenya">Kenya</button>
          <button className="product-cards-filter_elem_button" onClick={this.onUpdateCountry} data-country="columbia">Columbia</button>
        </div> 
      </div> 
    )
  }
}