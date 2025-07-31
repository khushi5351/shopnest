import { useEffect, useState } from "react";
import { getProduct, deleteProduct, updateProduct, getCategories } from "../apis/handle_api";
import { Link } from "react-router-dom";
import "./Products.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
  ]); // You can fetch from an API if needed

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const fetchProducts = async () => {
    const res = await getProduct();
    setProducts(res.data);
  };

   const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res);
    };
  useEffect(() => {
    fetchProducts();
    fetchCategories()
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setName(product.name);
    setImage(product.image);
    setDesc(product.desc);
    setPrice(product.price);
    setCategory(product.category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      image,
      desc,
      price,
      category,
    };

    await updateProduct(selectedProduct.id, updatedProduct);
    handleClose();
    fetchProducts();
  };

  // Pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="products-page">
      <div className="product-header1">
        <h2>All Products</h2>
        <Link to="/addproduct" className="add-product-link">
          <button className="add-btn">
            <i className="fas fa-plus"></i> Add New Product
          </button>
        </Link>
      </div>

      <div className="product-grid">
        {currentProducts.map((p, i) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <p className="price">₹{p.price}</p>
            <div className="card-buttons">
              <button className="update-btn" onClick={() => handleOpen(p)}>Update</button>
              <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={currentPage === idx + 1 ? "active-page" : ""}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Update Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="update-modal-title"
        aria-describedby="update-modal-description"
      >
        <Box sx={modalStyle}>
          <h2>Update Product</h2>
          <form className="product-form" onSubmit={handleUpdate}>
            <label>Product Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Product Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

            <label>Product Description</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required />

            <label>Product Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>

            <button type="submit">Update Product</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Products;
