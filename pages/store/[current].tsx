import next, { NextPage } from "next";
import { storefront } from "../../utils/storefront";
import PaginationButtons from "../../components/PaginationButtons";
import packageInfo from "../../app_config.json";
import ProductList from "../../components/ProductList";
import Head from "next/head";
import {
  getAllHandles,
  getTotalProducts,
  getAllProducts,
} from "../../back/getData";

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

const gql = String.raw;

const getAllCursors = gql`
  query getAllCursors {
    products(first: 250) {
      edges {
        cursor
      }
    }
  }
`;

const getProductsByCursor = (cursor: string): string => {
  return gql`
  query getProductsByCursor {
    products(first: ${totalDisplayed}, ${
    cursor === "" ? "" : 'after: "' + cursor + '"'
  }){
      edges {
        node {
          id
          handle
          title
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            nodes {
              altText
              src
              transformedSrc(maxWidth: 100, maxHeight: 100)
            }
          }
        }
      }
    }
  }
`;
};

export async function getStaticPaths() {
  try {
    // const { data } = await storefront(getAllCursors);

    const pageNumber = Math.ceil(getTotalProducts() / totalDisplayed);
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
  //not returning an object

  try {
    // const allCursors = await storefront(getAllCursors);
    const allCursors = {
      data: {
        products: {
          edges: [
            {
              cursor: "example-handle",
            },
            {
              cursor: "another-example",
            },
          ],
        },
      },
    };
    const allHandles = getAllHandles();
    const totalProducts = getTotalProducts();
    const selectedPage = await params.current;

    const getProducts = getAllProducts();

    // const getProducts =
    //   selectedPage == 1
    //     ? await storefront(getProductsByCursor(""))
    //     : await storefront(
    //         getProductsByCursor(
    //           allCursors.data.products.edges[
    //             (selectedPage - 1) * totalDisplayed - 1
    //           ].cursor
    //         )
    //       );

    // example response - debug only
    // const getProducts = {
    //   data: {
    //     products: {
    //       edges: [
    //         {
    //           node: {
    //             id: "1",
    //             handle: "example-handle",
    //             title: "Example Product",
    //             priceRange: {
    //               minVariantPrice: {
    //                 amount: "19.99",
    //               },
    //             },
    //             images: {
    //               nodes: [
    //                 {
    //                   altText: "Example Image",
    //                   src:
    //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
    //                   transformedSrc:
    //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
    //                 },
    //               ],
    //             },
    //           },
    //         },
    //         {
    //           node: {
    //             id: "2",
    //             handle: "another-example",
    //             title: "Another Example",
    //             priceRange: {
    //               minVariantPrice: {
    //                 amount: "29.99",
    //               },
    //             },
    //             images: {
    //               nodes: [
    //                 {
    //                   altText: "Another Image",
    //                   src:
    //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
    //                   transformedSrc:
    //                     "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph",
    //                 },
    //               ],
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   },
    // };

    const products = getProducts.products;

    return {
      props: { totalProducts, selectedPage, products },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Store;
