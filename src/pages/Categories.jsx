import { useEffect, useState } from "react";
import { deleteCategory, getCategories } from "../apis/handle_api";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories=async()=>{

    const res= await getCategories()
    setCategories(res)
  }

useEffect(()=>{
    fetchCategories()
})
async function handleDelete(id) {
    await deleteCategory(id);
    fetchCategories();
  }
  return (
    <>
    <div className="main">
    <h1 style={{width:"74%"}}>Categories</h1>
   <div className="categories-container">
  {categories.map((c) => (
    <div className="category-card" key={c.id}>
      <div className="category-name">{c.name}</div>
      <div className="category-buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={()=>handleDelete(c.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>
</div>
  </>

  );
}

export default Categories;
