import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  const products = useSelector((state) => state.products.items);
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="products">
      <h1>{category ? `Danh mục: ${category}` : "Tất cả sản phẩm"}</h1>
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
