import type { NextPage } from "next";
import Head from "next/head";

import { Product } from "../../../interfaces/product.interface";

import ProductOverview from "../../../components/ProductOverview";
import {
  getAllHandles,
  getProductByHandle,
} from "../../../back/productsService";

interface ProductByHandleProps {
  productByHandle: Product;
}

const ProductByHandle: NextPage<ProductByHandleProps> = ({
  productByHandle,
}) => {
  return (
    <div>
      <Head>
        <title>{`Afternoon Roastery: ${productByHandle.title}`}</title>
        <meta
          property="og:title"
          content={`Producto: ${productByHandle.title}`}
          key="title"
        />
        <meta
          name="keywords"
          content="Café, Colombia, Brasil, 250gr, Tostadores, Cafe tostado, cafe de especialidad"
        ></meta>
        <meta
          name="description"
          content={`${productByHandle.description}`}
        ></meta>
        <meta property="og-locale" content="es_ES"></meta>
      </Head>
      <ProductOverview productByHandle={productByHandle} />
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const handles = await getAllHandles();

    const paths = handles.map((handle: string) => ({
      params: {
        handle: handle,
      },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const productByHandle = await getProductByHandle(params.handle);

    return {
      props: { productByHandle },
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductByHandle;
