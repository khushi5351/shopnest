import { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "../apis/handle_api";
import { Link } from "react-router-dom";

import "./Products.css";

function Products() {
  const [product, setProduct] = useState([]);

  async function handleProduct() {
    const res = await getProduct();
    console.log(res);
    setProduct(res);
  }

  useEffect(() => {
    handleProduct();
  }, []);

  async function handleDelete(id) {
    await deleteProduct(id);
    handleProduct();
  }

  return (

    <div className="products-page">
      <h2>All Products</h2>
      <div style={{ marginBottom: "20px", textAlign: "right" }}>
        <Link to="/addproduct" className="add-product-link">
          <button className="add-btn">
            <i className="fas fa-plus"></i> Add New Product
          </button>
        </Link>
      </div>
      <div className="product-grid">
        {
          product.map((p, i) => (
            <div className="product-card" key={i}>
              <img src={p.image} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <p className="price">₹{p.price}</p>
              <div className="card-buttons">
                <button className="update-btn" >Update</button>
                <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
