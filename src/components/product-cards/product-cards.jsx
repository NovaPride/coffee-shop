import { Component } from "react";

import "./product-cards.scss"


export default class ProductCards extends Component{
  constructor(props) {
    super(props);
   
    this.state = {}
  }

  render() {
    const cardsData = this.props.cards;
    const isShadow = this.props.shadow;

    const gridElemStyle = isShadow ? "product-cards_grid_elem product-cards_grid_elem_shadow" : "product-cards_grid_elem";

    return (
      <div className="product-cards_grid">
        {
          cardsData.map(({id, text, price, imgSrc}) => {
            return (
              <div className={gridElemStyle} tabIndex="0" key={id} onClick={()=>{console.log("Clicked!!")}}>
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