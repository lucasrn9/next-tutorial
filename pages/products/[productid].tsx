import { GetStaticPaths, GetStaticProps } from "next";
import ProductTypes from "../../types/product";
import ProductidProps from "../../types/props/ProductidProps";

export default function Products({ product }: ProductidProps) {
  return (
    <>
      <h1>{product?.title}</h1>
      <span>{product?.description}</span>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { productid: "1" } }, { params: { productid: "2" } }],
  fallback: true,
});

export const getStaticProps: GetStaticProps<{
  product: ProductTypes[];
}> = async (context) => {
  const { productid } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/${productid}`);
  const product: ProductTypes[] = await res.json();
  return {
    props: {
      product,
    },
  };
};
