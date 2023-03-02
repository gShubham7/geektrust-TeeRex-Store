import { formatCurrency } from "../utils";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import styles from "./checkout.module.css";

const Checkout = () => {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);

  return (
    <div className={styles.wrapper}>
      <p>Total Items:</p>
      <h4>{itemCount}</h4>
      <p>Total Payment:</p>
      <h4>{formatCurrency(total)}</h4>
      <hr />
      <div>
        <button className={styles.checkBtn} onClick={handleCheckout}>
          CHECKOUT
        </button>
        <button className={styles.clearBtn} onClick={clearCart}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Checkout;
