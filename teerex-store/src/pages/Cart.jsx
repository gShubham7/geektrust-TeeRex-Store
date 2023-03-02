import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

const Cart = () => {
  // Extract the cart state from the context
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <h1 style={{ marginTop: "8rem", textAlign: "center" }}>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </h1>

      {checkout && (
        <div className={styles.checkoutMessage}>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <div className={styles.ShopBtn} onClick={clearCart}>
              Continue Shopping
            </div>
          </Link>
        </div>
      )}

      <div className={styles.layout}>
        <div>
          {
            <div className={styles.cartItemsWrapper}>
              {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </div>
          }
        </div>

        <div>
          {/* Checkout component  */}
          {cartItems.length > 0 && <Checkout />}
        </div>
      </div>
    </>
  );
};

export default Cart;
