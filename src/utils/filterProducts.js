import api from "../services/api";

export const filterProducts = async (searchProduct) => {
  if (!searchProduct) {
    return [];
  }

  const { data } = await api.get("/catalog");

  const products = data.filter((product) =>
    product.name.toLowerCase().includes(searchProduct)
  );
  return products;
};
