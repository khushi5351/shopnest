import { useEffect, useState } from "react";
import { addProduct, getCategories } from "../apis/handle_api";
import './Addproduct.css';

function Addproduct() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res);
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    const res = await addProduct({ name, image, desc, price, category });
    if (res) {
      alert("Product added successfully!");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="product-form" onSubmit={submitProduct}>
        <label>Product Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" required />

        <label>Product Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" required />

        <label>Product Description</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description" required />

        <label>Product Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" required />

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Addproduct;
