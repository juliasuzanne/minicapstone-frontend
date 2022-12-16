import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
export function Home() {
  let [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1> Welcome </h1>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} />
    </div>
  );
}
