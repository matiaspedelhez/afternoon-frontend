import type { NextPage } from "next";
import { storefront } from "../utils/storefront";

import PromoSection from "../components/PromoSection";
import TrendingProducts from "../components/TrendingProducts";
import Head from "next/head";
import { getAllProducts } from "../back/getData";

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>{`Afternoon Roastery: Inicio`}</title>
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

const gql = String.raw;

const FeaturedProductsQuery: string = gql`
  query FeaturedProducts {
    products(first: 4, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          priceRange {
            minVariantPrice {
              amount
            }
          }
          title
          variants(first: 1) {
            edges {
              node {
                title
              }
            }
          }
          images(first: 1) {
            nodes {
              transformedSrc(maxHeight: 30, maxWidth: 30)
              url
            }
          }
          handle
        }
      }
    }
  }
`;

export async function getStaticProps() {
  // const { data } = await storefront(FeaturedProductsQuery);
  // const { data } = {
  //   data: {
  //     products: {
  //       edges: [
  //         {
  //           node: {
  //             id: "1",
  //             priceRange: {
  //               minVariantPrice: {
  //                 amount: "19.99",
  //               },
  //             },
  //             title: "Product 1",
  //             variants: {
  //               edges: [
  //                 {
  //                   node: {
  //                     title: "Variant 1",
  //                   },
  //                 },
  //               ],
  //             },
  //             images: {
  //               nodes: [
  //                 {
  //                   transformedSrc:
  //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
  //                   url:
  //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
  //                 },
  //               ],
  //             },
  //             handle: "product-1",
  //           },
  //         },
  //         {
  //           node: {
  //             id: "2",
  //             priceRange: {
  //               minVariantPrice: {
  //                 amount: "29.99",
  //               },
  //             },
  //             title: "Product 2",
  //             variants: {
  //               edges: [
  //                 {
  //                   node: {
  //                     title: "Variant 2",
  //                   },
  //                 },
  //               ],
  //             },
  //             images: {
  //               nodes: [
  //                 {
  //                   transformedSrc:
  //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
  //                   url:
  //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
  //                 },
  //               ],
  //             },
  //             handle: "product-2",
  //           },
  //         },
  //         // More products...
  //       ],
  //     },
  //   },
  // };

  const data = getAllProducts();

  return {
    props: data,
  };
}

export default Home;
