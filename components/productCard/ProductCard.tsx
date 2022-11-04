import Link from "next/link";
import styles from "../../styles/ProductCard.module.css";
import ProductCardProps from "../../types/props/ProductCardProps";

function ProductCard({ imgSrc, imgAlt, title, price, id }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.productCard}>
        <div className={styles.productCardImageWrapper}>
          <img className={styles.productCardImage} src={imgSrc} alt={imgAlt} />
        </div>
        <div className={styles.productCardInfos}>
          <span className={styles.productName}>{title}</span>
          <span className={styles.productPrice}>{price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
