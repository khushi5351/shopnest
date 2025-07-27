// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingCart,
//   FaBars,
//   FaTimes
// } from "react-icons/fa";
// import "./NavUser.css";
// import { Link } from "react-router-dom";

// const Navuser = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const cartCount = 3; // Replace with dynamic state as needed

//   return (
//     <nav className="navbaru">
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           FashionShop
//         </Link>

//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li><Link to="/Home">Home</Link></li>
//           <li><Link to="/Product">Products</Link></li>
//           <li><Link to="/About">About</Link></li>
//         </ul>

//         <div className="nav-actions">
//           <FaSearch className="icon" />
//           <FaHeart className="icon" />
//           <div className="cart">
//             <FaShoppingCart className="icon" />
//             <span className="cart-count">{cartCount}</span>
//           </div>
//           <div
//             className="hamburger"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navuser;
