const data = require("./db.js");

// const data = JSON.parse(db);

const getAllHandles = () => {
  const productHandles = data.products.map((product) => ({
    handle: product.handle,
  }));

  return productHandles;
};

const getProductByHandle = (handle) => {
  const productByHandle = data.products.filter((product) => {
    return product.handle === handle;
  });

  return productByHandle[0];
};

const getAllProducts = () => {
  return data;
};

const featuredProducts = () => {
  const featuredHandles = [
    "colombia-excelso",
    "brasil-santos",
    "colombia-excelso",
    "brasil-santos",
  ];
};

const getTotalProducts = () => data.products.length;

const getFromIndex = (index) => {};

export {
  getAllHandles,
  getProductByHandle,
  featuredProducts,
  getTotalProducts,
  getAllProducts,
};

// console.log(getAllHandles()); works
// console.log(getProductByHandle("colombia-excelso")); works
