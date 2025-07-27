import { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "../apis/handle_api";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(c.id)}>Delete</button>
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
    </>
  );
}

export default Categories;
