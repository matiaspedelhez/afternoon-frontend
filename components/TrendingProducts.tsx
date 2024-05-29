import Image from "next/image";
import { useRouter } from "next/router";

import { Product } from "../interfaces/product.interface";

const TrendingProducts = ({
  trendingProducts,
}: {
  trendingProducts: Product[];
}) => {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Productos en tendencia
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trendingProducts.map((product: Product) => (
            <div
              key={product.id}
              className="group relative h-auto cursor-pointer hover:opacity-75"
              onClick={() => router.push(`/store/product/${product.handle}`)}
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative ">
                <Image
                  src={product.imageUrl1}
                  alt={product.handle}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={30}
                  className="w-full h-full object-center object-contain duration-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {`$${product.minVariantPrice}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
