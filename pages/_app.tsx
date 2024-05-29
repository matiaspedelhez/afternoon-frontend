import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import ShoppingCart from "../components/ShoppingCart";

import { Toaster } from "react-hot-toast";
import { useBetween } from "use-between";

interface cartItem {
  id: string;
  title: string;
  imageSrc: string;
  handle: string;
  price: number;
  size: string;
  quantity: number;
}

const useCartState = () => {
  const [shoppingCart, setShoppingCart] = useState<cartItem[]>([]);
  return { shoppingCart, setShoppingCart };
};
export const useSharedCartState = () => useBetween(useCartState);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { shoppingCart } = useSharedCartState();

  const [shoppingCartCount, setShoppingCartCount] = useState<number>(0);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  useEffect(() => {
    let count = 0;
    shoppingCart.forEach((item) => {
      count = count + item.quantity;
    });

    setShoppingCartCount(count);
  }, [shoppingCart]);

  return pageLoading ? (
    <LoadingScreen />
  ) : (
    <div className="animate-emerge">
      <ShoppingCart closeCart={() => setShowCart(false)} showCart={showCart} />
      <Navbar
        switchCart={() => setShowCart(!showCart)}
        cartLength={shoppingCartCount}
      />
      <Toaster />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}

export default MyApp;
