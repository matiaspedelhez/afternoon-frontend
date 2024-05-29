import { useRouter } from "next/router";
import Image from "next/image";
import { Product } from "../interfaces/product.interface";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const router = useRouter();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => (
            <a
              key={product.id}
              className="group cursor-pointer hover:opacity-75"
              onClick={() => router.push(`/store/product/${product.handle}`)}
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative ">
                <Image
                  src={product.imageUrl1}
                  alt={product.imageUrl1}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={60}
                  className="duration-200"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {`$${product.minVariantPrice}`}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
