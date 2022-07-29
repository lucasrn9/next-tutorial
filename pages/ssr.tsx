import Head from "next/head";
import ProductCard from "../components/productCard/ProductCard";
import styles from "../styles/Home.module.css";
import HomeProps from "../types/props/HomeProps";

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Nine&apos;s store</title>
      </Head>
      <header className={styles.header}>
        <h1>Welcome to the Nine&apos;s store</h1>
        <h2>Here you will find the best prices and highest quality products</h2>
      </header>
      <main className={styles.main}>
        <h1>server side rendering (ssr) </h1>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCardWrapper}>
              <ProductCard
                imgSrc={product.image}
                imgAlt={product.title}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=6");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
