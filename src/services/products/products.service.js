import axios from "axios";

const productsService = () => {
  return axios.get("/api/products");
};

export { productsService };
