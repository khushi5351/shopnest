import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../apis/api";
import { useNavigate } from "react-router-dom";

function Electronics() {
    const [Electronics, setElectronics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const navigate = useNavigate();
    async function fetchMen() {
        try {
            const res = await axios.get(`${URL}?category=Electronics`);
            setElectronics(res.data);
        } catch (error) {
            console.error("Failed to fetch Electronics products:", error);
        }
    }

    useEffect(() => {
        fetchMen();
    }, []);

    // Pagination calculations
    const totalPages = Math.ceil(Electronics.length / productsPerPage);
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    // const currentProducts = Electronics.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    };
    return (
        <>
            <div className="product-page1">
                <div className="product-header">
                    <h2>Electronics</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "end", width: "91%" }}>
                    <h5 style={{ marginTop: "-20px", padding: "5px" }}>Sort By:</h5>
                    <select
                        className="sort-dropdown"
                        onChange={(e) => navigate(e.target.value)}
                    >
                        <option value="/Product">Default</option>
      <option value="/Men">Men's clothing</option>
      <option value="/Women">Women's clothing</option>
      <option value="/Footware">Footwear</option>
      <option value="/Accessories">Accessories</option>
      <option value="/Electronics">Electronics</option>
                    </select>
                </div>
                <div className="product-grid1">
                    {Array.isArray(Electronics) &&
                        Electronics.map((p, i) => (
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
        </>
    );
}

export default Electronics;
