import Image from "next/image";
import styles from "../../styles/Header.module.css";
import cartIcon from "../../assets/icons/cart.svg";

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.brandName}>Nine&apos;s Store</span>
      <div className={styles.cartIconWrapper}>
        <Image
          className={styles.cartIcon}
          src={cartIcon}
          alt="The icon of a shopping cart"
        />
      </div>
    </header>
  );
}

export default Header;
