import type { NextPage } from "next";

import PromoSection from "../components/PromoSection";
import TrendingProducts from "../components/TrendingProducts";
import Head from "next/head";
import { getAllProducts } from "../back/productsService";
import { Product } from "../interfaces/product.interface";

const Home: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <Head>
        <title>{`Inicio - Afternoon Roastery`}</title>
        <meta property="og-locale" content="es_ES"></meta>
        <meta property="og:title" content={`Inicio`} key="title" />
        <meta
          name="keywords"
          content="Café, Colombia, Brasil, 250gr, Tostadores, Cafe tostado, cafe de especialidad"
        ></meta>
        <meta
          name="description"
          content={`Afternoon Roastery: tostadores de café de especialidad en Corrientes y Resistencia.`}
        ></meta>
      </Head>
      <PromoSection />
      <TrendingProducts trendingProducts={products} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const products = await getAllProducts();

    return {
      props: {
        products, // assuming getAllProducts returns an array of products
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [], // Return an empty array if an error occurs
        error: "Failed to fetch products",
      },
    };
  }
}

export default Home;
