import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { formatCurrency } from "../utils";
// import TrashIcon from "/assets/icons/trash-outline.svg";
// import Plus from "/assets/icons/add-circle-outline.svg";
// import Minus from "/assets/icons/remove-circle-outline.svg";
import styles from "./cartItem.module.css";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <div className={StyleSheet.singleCartItem}>
      <img className={styles.product} src={product.image} alt={product.name} />
      <div>
        <h5>{product.name}</h5>
        <p>{formatCurrency(product.price)}</p>
      </div>

      {/* Buttons */}
      <div className={styles.btnContainer}>
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          {/* <img src={Plus} alt="" /> */}
        </button>

        <div>
          <p>Qty: {product.quantity}</p>
        </div>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            {/* <img src={Minus} alt="" /> */}
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            {/* <img className={styles.icon} src={TrashIcon} alt="alt" /> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
