import styles from "../../styles/ProductCard.module.css"

const ProductCard = ({ imgSrc, imgAlt, title, price }) => {

    return (
        <div className={styles.productCard}>
            <div className={styles.productCardImageWrapper}>
                <img className={styles.productCardImage} src={imgSrc} alt={imgAlt} ></img>
            </div>
            <div className={styles.productCardInfos}>
                <span>{title}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default ProductCard