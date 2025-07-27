import { useEffect, useState } from "react";
import "./Product.css";
import { getProduct } from "../../apis/handle_api";
import { useNavigate } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    // const [sortOption, setSortOption] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

const navigate = useNavigate();
    async function handleProducts() {
        try {
            const res = await getProduct();
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleProducts();
    }, []);

    // Pagination calculations
    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };

    return (
        <div className="product-page1">
            <div className="product-container1">
                <div className="product-header">
                    <h2>Our Products</h2>
                </div>
               <div style={{ display: "flex", justifyContent: "end", width: "91%" }}>
    <h5 style={{ marginTop: "-20px", padding: "5px" }}>Sort By:</h5>
    <select
      className="sort-dropdown"
      onChange={(e) => navigate(e.target.value)}
    >
      <option value="/Product">Default</option>
      <option value="/Men">Men's clothing</option>
      <option value="/Women">Men's clothing</option>
      <option value="/name">Name</option>
    </select>
  </div>
                <div className="product-grid1">
                    {Array.isArray(currentProducts) &&
                        currentProducts.map((p, i) => (
                            <div className="product-card1" key={i}>
                                <img src={p.image} alt={p.name} />
                                <h3>{p.name}</h3>
                                <p>{p.desc}</p>
                                <p className="price1">₹{p.price}</p>
                                <button className="add-btn1">Add to cart</button>
                            </div>
                        ))}
                </div>

                {/* Pagination Controls */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
