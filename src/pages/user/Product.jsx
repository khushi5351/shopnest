import { useEffect, useState } from "react";
import "./Product.css";
import { getProduct } from "../../apis/handle_api";
import { useNavigate } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const navigate = useNavigate();

    // Fetch products from API
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await getProduct();
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    // Add to cart
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(" added to cart!");
    };

    // Pagination logic
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

                {/* Sort Dropdown */}
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

                {/* Product Grid */}
                <div className="product-grid1">
                    {currentProducts.map((p, i) => (
                        <div className="product-card1" key={i}>
                            <img src={p.image} alt={p.name} />
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <p className="price1">₹{p.price}</p>
                            <button className="add-btn1" onClick={() => addToCart(p)}>
                                Add to cart
                            </button>
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
