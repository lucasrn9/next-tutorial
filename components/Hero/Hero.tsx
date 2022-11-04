import Image from "next/image";
import cartIcon from "../../assets/icons/cart.svg";
import heroVector from "../../assets/vectors/hero-vector.svg";
import styles from "../../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to Nine&apos;s Store</h1>
        <p>Here you will find the best products for the cheapest prices</p>
        <a href="#shopping">
          Start Shopping
          <div className={styles.buttonCartIconWrapper}>
            <Image
              className={styles.buttonCartIcon}
              src={cartIcon}
              width="29px"
              height="26px"
            />
          </div>
        </a>
        <div className={styles.heroVectorWrapper}>
          <Image
            src={heroVector}
            className={styles.heroVector}
            alt="Vector of client buying a product"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
