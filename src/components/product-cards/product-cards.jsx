import { Component } from "react";

import "./product-cards.scss"


export default class ProductCards extends Component{
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  render() {
    const mainCardsData = this.props.cards;
    return (
      <div className="product-cards_grid">
        {
          mainCardsData.map(({id, text, price, imgSrc}) => {
            return (
              <div className="product-cards_grid_elem" tabIndex="0" key={id} onClick={()=>{console.log("Clicked!!")}}>
                <div className="product-cards_grid_elem_wrapper">
                  <img className="product-cards_grid_elem_img" src={imgSrc} alt={text} />
                  <p className="product-cards_grid_elem_text">{text}</p>
                  <p className="product-cards_grid_elem_price">{price + "$"}</p>
                </div>         
              </div>
            );
          })
        }
      </div> 
    );
  }
}