// src/pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
// import heroImage from "src/Assets/banner1.jpg"; // place image in src/assets
import banner1 from '../../Assets/banner1.jpg';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-page">
    <header
  className="hero"
  style={{
    backgroundImage: `url(${banner1})`,
  }}
>


      
        <div className="hero-content">
          <h1>Discover The Best</h1>
          <h1>Fashion Collection</h1>
          <p>The high Quality Collection</p>
          <button>Shop Now</button>
          <button style={{backgroundColor:"transparent",border:"1px solid white"}}>See Collections</button>
        </div>
      </header>

      {/* <section className="category-section">
        <h2>Shop by Category</h2> */}
        {/* Replace categories array and images with your own */}
        {/* {["Men's Clothing", "Women's Clothing", "Electronics", "Footwear","Accessories"].map((cat) => (
          <div key={cat} className="category-card">
            <img src={`/categories/${cat.toLowerCase()}.jpg`} alt={cat} />
            <p>{cat}</p>
          </div>
        ))}
      </section> */}

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.slice(0, 8).map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
