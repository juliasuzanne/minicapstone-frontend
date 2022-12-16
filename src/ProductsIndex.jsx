import axios from "axios";
import { useState, useEffect } from "react";

export function ProductsIndex(props) {
  //let imageUrls = [];

  return (
    <div>
      {props.products.map((product) => (
        <div>
          <h2> {product.name} </h2>
          <p> ID: {product.id} </p>
          <p> {product.price} </p>
          <p> {product.description}</p>
          {/* {product.images.forEach((pic) => imageUrls.push(pic.url))}
          {console.log(imageUrls[0])}
          <img src={imageUrls[0]} width="200" />
          <img src={imageUrls[1]} width="200" />
          <img src={imageUrls[2]} width="200" />

          <p hidden>{(imageUrls = [])}</p> */}
          <button onClick={() => props.onShowProduct(product)}>More info</button>
        </div>
      ))}
      <h1>Test H1</h1>
    </div>
  );
}
