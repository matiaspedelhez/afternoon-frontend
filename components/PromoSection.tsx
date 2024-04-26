import Image from "next/image";
import Link from "next/link";

const PromoSection = () => {
  // add content requested from API (7 images, a title and a description)

  const item = (url: string) => {
    return (
      <div className="w-full h-full object-center object-cover relative">
        <Image src={url} alt="" layout="fill" object-fit="cover" />
      </div>
    );
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Café de especialidad en tu hogar
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Disfrutá de la mejor taza de café desde la comodidad de tu hogar.
              Usamos los mejores granos del mercado y hacemos envíos a todo el
              país.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid (up to 7 items) */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        {item("./assets/landing/green_coffee_hands.png")}
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/latte-2.png")}
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/coffee_latte.png")}
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/coffee_beans.png")}
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/plants.png")}
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/crema.png")}
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        {item("./assets/landing/beans_bag_behind.png")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/store">
                <a className="inline-block text-center bg-amber-700 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-amber-800">
                  Ir a tienda
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
