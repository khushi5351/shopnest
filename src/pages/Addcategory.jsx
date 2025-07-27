import { useState } from "react";
import { addCategory } from "../apis/handle_api";
import './Addcategory.css'; // Renamed for clarity

function AddCategory() {
  const [name, setName] = useState('');

 const submitCategory = async (e) => {
  e.preventDefault();
  const res = await addCategory({name});
  if (res) {
    alert("Category added successfully!");
    setName("");
  }
};


  return (
    <div className="add-category-container">
      <h2>Add New Category</h2>
      <form className="category-form" onSubmit={submitCategory}>
        <label>Category Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name"
          required
        />
        <button type="submit" onClick={submitCategory}>Add Category</button>
      </form>
    </div>
  );
}

export default AddCategory;
