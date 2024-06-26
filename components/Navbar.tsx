import Image from "next/image";
import Link from "next/link";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface NavbarProps {
  cartLength: number;
  switchCart: () => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({
  cartLength,
  switchCart,
}) => {
  return (
    <Popover className="relative bg-white z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}>
              <div className="h-8 sm:h-10 aspect-square cursor-pointer relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/assets/logo-pagina.png"
                  alt="Logo"
                />
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-700">
              <span className="sr-only">Abrir menú</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link
              href="/store"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Tienda
              </a>
            </Link>
            {/* <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Acerca de
              </a>
            </Link>
            <Link href="/frequently-asked">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Ayuda
              </a>
            </Link> */}
            <a
              href="https://mayorista.afternoon.com.ar"
              className="cursor-pointer text-center font-medium text-gray-500 hover:text-gray-900"
            >
              Mayorista
            </a>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contacto
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
              onClick={switchCart}
            >
              {`Carrito${cartLength ? " (" + cartLength + ")" : ""}`}
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="h-8 aspect-square relative">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src="/assets/logo-pagina.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-700">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid gap-y-4">
                <Link href="/store">
                  <a
                    href="#"
                    className="cursor-pointer text-center font-medium text-gray-500 hover:text-gray-900"
                  >
                    Tienda
                  </a>
                </Link>

                <a
                  href="https://mayorista.afternoon.com.ar"
                  className="cursor-pointer text-center font-medium text-gray-500 hover:text-gray-900"
                >
                  Mayorista
                </a>

                <Link href="/contact">
                  <a
                    href="#"
                    className="cursor-pointer text-center font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contacto
                  </a>
                </Link>
              </div>
              <a
                onClick={switchCart}
                className="cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800"
              >
                {`Carrito${cartLength ? " (" + cartLength + ")" : ""}`}
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
