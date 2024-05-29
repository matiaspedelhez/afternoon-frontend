import { NextPage } from "next";

import PaginationButtons from "../../components/PaginationButtons";
import packageInfo from "../../app_config.json";
import ProductList from "../../components/ProductList";
import Head from "next/head";
import { getTotalProducts, getAllProducts } from "../../back/productsService";

const totalDisplayed = Number(packageInfo.catalog.total_items_to_display);

const Store: NextPage = ({ totalProducts, products, selectedPage }: any) => {
  return (
    <div>
      <Head>
        <title>{`Afternoon Roastery: Tienda - Página ${selectedPage}`}</title>
        <meta
          property="og:title"
          content={`Tienda: Página ${selectedPage}`}
          key="title"
        />
        <meta
          name="keywords"
          content="Café, Colombia, Brasil, 250gr, Tostadores, Cafe tostado, cafe de especialidad"
        ></meta>
        <meta
          name="description"
          content={`Afternoon Roastery: tostadores de café de especialidad. Tienda - Página ${selectedPage}.`}
        ></meta>
        <meta property="og-locale" content="es_ES"></meta>
      </Head>
      <ProductList products={products} />
      <PaginationButtons
        selectedPage={selectedPage}
        totalDisplayed={totalDisplayed}
        totalProducts={totalProducts}
      />
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const pageNumber = Math.ceil((await getTotalProducts()) / totalDisplayed);
    const pages: string[] = new Array();

    for (let i = 1; i <= pageNumber; i++) {
      pages.push(`${i}`);
    }

    const paths = pages.map((number) => {
      return {
        params: {
          current: number,
        },
      };
    });

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const products = await getAllProducts();
    const totalProducts = products.length;

    const selectedPage = params.current;

    return {
      props: { totalProducts, selectedPage, products },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
        error: "Failed to fetch products",
      },
    };
  }
}
export default Store;
