import { Link } from "react-router-dom";
import { formatCurrency } from "../utils";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.productImage}
        src={product.image + "?v=" + product.id}
        alt={product.name}
      />
      <p className={styles.productName}>{product.name}</p>
      <h3 className={styles.productCardPrice}>{formatCurrency(product.price)}</h3>
      <div className={styles.productCardBtn}>
        {isInCart(product) && (
          <button
          className={styles.btnAddMore}
            onClick={() => {
              increase(product);
            }}          
          >
            Add More
          </button>
        )}

        {!isInCart(product) && (
          <button className={styles.btn} onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
