import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductShow } from "./ProductShow";

export function Home() {
  let [products, setProducts] = useState([]);
  let [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  let [currentProduct, setCurrentProduct] = useState({});

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

  const handleShowProduct = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (id, params) => {
    axios
      .patch(`http://localhost:3000/products/${id}.json`, params)
      .then((response) => {
        console.log(response.data);
        setProducts(
          products.map((product) => {
            if (product.id === response.data.id) {
              return response.data;
            } else {
              return product;
            }
          })
        );
        handleClose();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleDestroyProduct = (product) => {
    axios
      .delete(`http://localhost:3000/products/${product.id}.json`)
      .then((response) => {
        setProducts(products.filter((p) => p.id !== product.id));
        handleClose();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1> Welcome </h1>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
