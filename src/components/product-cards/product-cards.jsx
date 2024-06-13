import { Link } from "react-router-dom";

import "./product-cards.scss";

const ProductCards = ({ cards, shadow, onlyBest }) => {
  const gridElemStyle = shadow
    ? "product-cards_grid_elem product-cards_grid_elem_shadow"
    : "product-cards_grid_elem";

  return (
    <div className="product-cards_grid">
      {onlyBest
        ? cards.map((props) => {
            return props.best ? (
              <CardView {...props} gridElemStyle={gridElemStyle} />
            ) : null;
          })
        : cards.map((props) => {
            return <CardView {...props} gridElemStyle={gridElemStyle} />;
          })}
    </div>
  );
};

const CardView = ({ id, text, price, country, imgSrc, gridElemStyle }) => {
  return (
    <Link to={"/coffeedetails/" + id} className={gridElemStyle} tabIndex="0">
      <div className="product-cards_grid_elem_wrapper">
        <img className="product-cards_grid_elem_img" src={imgSrc} alt={text} />
        <p className="product-cards_grid_elem_text">{text}</p>
        {country ? (
          <p className="product-cards_grid_elem_country">{country}</p>
        ) : (
          ""
        )}
        <p className="product-cards_grid_elem_price">{price + "$"}</p>
      </div>
    </Link>
  );
};

export default ProductCards;
