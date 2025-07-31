import { useEffect, useState } from "react";
import { deleteCategory, getCategories, updateCategory } from "../apis/handle_api";
import "./Categories.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editedName, setEditedName] = useState("");

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    await deleteCategory(id);
    fetchCategories();
  };

  const handleEditOpen = (category) => {
    setSelectedCategory(category);
    setEditedName(category.name);
    setOpen(true);
  };

  const handleEditClose = () => {
    setOpen(false);
    setSelectedCategory(null);
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    await updateCategory(selectedCategory.id, { name: editedName });
    handleEditClose();
    fetchCategories();
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="main">
        <h1 style={{ width: "74%" }}>Categories</h1>
        <div className="categories-container">
          {currentCategories.map((c) => (
            <div className="category-card" key={c.id}>
              <div className="category-name">{c.name}</div>
              <div className="category-buttons">
                <button className="edit-btn" onClick={() => handleEditOpen(c)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Edit Category Modal */}
      <Modal
        open={open}
        onClose={handleEditClose}
        aria-labelledby="edit-category-modal"
        aria-describedby="edit-category-form"
      >
        <Box sx={modalStyle}>
          <h2>Edit Category</h2>
          <form onSubmit={handleUpdateCategory} className="category-form">
            <label>Category Name</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              required
            />
            <button type="submit">Update Category</button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Categories;
