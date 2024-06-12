import { useState } from "react";

import "./product-cards-filter.scss";

const ProductCardsFilter = (props) => {
  const [promt, setPromt] = useState("");
  const [country, setCountry] = useState("");

  const onUpdateSearch = (e) => {
    const newPromt = e.target.value;
    setPromt(newPromt);
    props.setPromt(newPromt);
  };

  const onUpdateCountry = (e) => {
    const newCountry = e.target.dataset.country;
    e.target.parentElement.childNodes.forEach((node) =>
      node.classList.remove("product-cards-filter_elem_button_active")
    );
    if (newCountry === country) {
      setCountry("");
      props.setCountry("");
    } else {
      e.target.classList.add("product-cards-filter_elem_button_active");
      setCountry(newCountry);
      props.setCountry(newCountry);
    }
  };

  return (
    <div className="product-cards-filter">
      <div className="product-cards-filter_elem">
        <p className="product-cards-filter_elem_label">Looking for</p>
        <input
          className="product-cards-filter_elem_search"
          type="text"
          placeholder="start typing here"
          value={promt}
          onChange={onUpdateSearch}
        />
      </div>
      <div className="product-cards-filter_elem">
        <p className="product-cards-filter_elem_label">Or filter</p>
        <button
          className="product-cards-filter_elem_button"
          onClick={onUpdateCountry}
          data-country="brazil">
          Brazil
        </button>
        <button
          className="product-cards-filter_elem_button"
          onClick={onUpdateCountry}
          data-country="kenya">
          Kenya
        </button>
        <button
          className="product-cards-filter_elem_button"
          onClick={onUpdateCountry}
          data-country="columbia">
          Columbia
        </button>
      </div>
    </div>
  );
};

export default ProductCardsFilter;
