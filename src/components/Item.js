import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  // Define the styles based on whether the item is in the cart or not
 
  const buttonStyle = inCart ? { backgroundColor: 'rgb(253, 4, 220)' } : { backgroundColor: 'rgb(237, 237, 32)' };

  const toggleInCart = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? "in-cart" : ""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={`add ${inCart ? "in-cart-btn" : ""}`} 
        onClick={toggleInCart}
        style={buttonStyle}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
