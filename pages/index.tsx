import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProductTypes from "../types/product";
import HomeProps from "../types/props/HomeProps";
import Hero from "../components/Hero/Hero";
import ShoppingSection from "../components/shoppingSection/ShoppingSection";
import Footer from "../components/footer/Footer";

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Nine&apos;s store</title>
      </Head>
      <main className={styles.main}>
        <Hero />
        <ShoppingSection products={products} />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=6");
  const data: ProductTypes[] = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
