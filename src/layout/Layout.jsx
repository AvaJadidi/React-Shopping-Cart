import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css"

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">AvaShop </Link>
        <Link to="/checkout">
        <div>
          <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </div>
        </Link>
      </header>

      {children}

      <footer  className={styles.footer}>
        <p>Developed By Ava with love</p>
      </footer>
    </>
  );
}

export default Layout;
