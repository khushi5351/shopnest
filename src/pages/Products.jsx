import { useEffect, useState } from "react";
import { getProduct, deleteProduct } from "../apis/handle_api";
import { Link } from "react-router-dom";
import "./Products.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Addproduct from "./Addproduct";

const style = {
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
  const [product, setProduct] = useState([]);
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className="product-header">
      <h2>All Products</h2>
      <Link to="/addproduct" className="add-product-link">
        <button className="add-btn">
          <i className="fas fa-plus"></i> Add New Product
        </button>
      </Link>
    </div>

    <div className="product-grid">
      {product.map((p, i) => (
        <div className="product-card" key={i}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          <p className="price">₹{p.price}</p>
          <div className="card-buttons">
            <button className="update-btn" onClick={handleOpen}>Update</button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Addproduct/>
          </Typography>
         
        </Box>
      </Modal>

            <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);


}

export default Products;
