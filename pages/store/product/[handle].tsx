import type { NextPage } from "next";
import { storefront } from "../../../utils/storefront";
import ProductOverview from "../../../components/ProductOverview";
import Head from "next/head";
import { getAllHandles, getProductByHandle } from "../../../back/getData.js";

const ProductByHandle: NextPage = ({ productByHandle }: any) => {
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

const gql = String.raw;

const allPaths = gql`
  {
    products(first: 100) {
      nodes {
        handle
      }
    }
  }
`;

const productByHandle = (handle: string) => gql`
  {
    productByHandle(handle: "${handle}") {
      id
      handle
      description
      images(first: 4) {
        nodes {
          transformedSrc(maxHeight: 50, maxWidth: 50)
          url
          altText
          id
          width
          height
        }
        
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      title
      options(first: 10) {
        name
        values
    }
    }
  }
`;

export async function getStaticPaths() {
  try {
    const handles = getAllHandles();

    const paths = handles.map(({ handle }: any) => ({
      params: {
        handle: handle,
      },
    }));

    console.log(paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }: any) {
  try {
    const productByHandle = getProductByHandle(params.handle);

    return {
      props: { productByHandle },
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductByHandle;
