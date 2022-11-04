import Image from "next/image";
import styles from "../../styles/ShoppingSection.module.css";
import shoppingSectionModel from "../../assets/models/model.svg";
import Carousel from "../carousel/Carousel";
import ShoppingSectionProps from "../../types/props/ShoppingSectionProps";

function ShoppingSection({ products }: ShoppingSectionProps) {
  return (
    <section className={styles.shoppingSection} id="shopping">
      <h1>Shopping</h1>
      <div className={styles.shoppingSectionModelWrapper}>
        <Image
          src={shoppingSectionModel}
          alt="Woman with orange glasses smiling while carrying white shopping bags"
        />
      </div>
      <div className={styles.carouselsContainer}>
        <div className={styles.carouselWrapper}>
          <Carousel title="Most Solds" products={products} />
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel title="New" products={products} />
        </div>
        <button type="button">View More</button>
      </div>
    </section>
  );
}

export default ShoppingSection;
