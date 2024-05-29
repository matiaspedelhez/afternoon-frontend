import axios from "axios";
import { Product } from "../interfaces/product.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllHandles = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_URL}/product/handles?type=retail`);
    const handles: string[] = response.data;
    return handles;
  } catch (error) {
    console.error("Error fetching product handles:", error);
    throw error;
  }
};

export const getProductByHandle = async (handle: string): Promise<Product> => {
  try {
    const response = await axios.get(`${API_URL}/product/handle/${handle}`);
    const product: Product = response.data;
    return product;
  } catch (error) {
    console.error(`Error fetching product with handle ${handle}:`, error);
    throw error;
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/product?type=retail`);
    const allProducts: Product[] = response.data;
    return allProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const featuredProducts = () => {
  const featuredHandles = [
    "colombia-excelso",
    "brasil-santos",
    "colombia-excelso",
    "brasil-santos",
  ];
};

export const getTotalProducts = async (): Promise<number> => {
  try {
    const allProducts = await getAllProducts();
    return allProducts.length;
  } catch (error) {
    console.error("Error getting total number of products:", error);
    throw error;
  }
};
