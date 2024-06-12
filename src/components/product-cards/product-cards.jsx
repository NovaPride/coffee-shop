import "./product-cards.scss";

const ProductCards = ({ cards, shadow }) => {
  const gridElemStyle = shadow
    ? "product-cards_grid_elem product-cards_grid_elem_shadow"
    : "product-cards_grid_elem";

  return (
    <div className="product-cards_grid">
      {cards.map(({ id, text, price, country, imgSrc }) => {
        return (
          <a
            href="/coffeedetails"
            className={gridElemStyle}
            tabIndex="0"
            key={id}
            >
            <div className="product-cards_grid_elem_wrapper">
              <img
                className="product-cards_grid_elem_img"
                src={imgSrc}
                alt={text}
              />
              <p className="product-cards_grid_elem_text">{text}</p>
              {country ? (
                <p className="product-cards_grid_elem_country">{country}</p>
              ) : (
                ""
              )}
              <p className="product-cards_grid_elem_price">{price + "$"}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ProductCards;
