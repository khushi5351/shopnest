import React from "react";
// import SocialMediaFooter from "./SocialMediaFooter";
import "./Footer.css";
import { HiChevronDown } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      {/* <SocialMediaFooter /> */}
      <footer className="footer">
      {/* <footer className="about-footer">
        &copy; 2025 ShopNest. All rights reserved.
      </footer> */}
        <div className="footer-sections">
          
          <div className="footer-column">
            <h3>Client Service</h3>
            <p>After-sale Service</p>
            <p>Free Insurance</p>
          </div>

          <div className="footer-column">
            <h3>Our Brand</h3>
            <p>The Company</p>
            <p>The Excellence</p>
            <p>International Awards</p>
            <p>Our Story</p>
          </div>

          <div className="footer-column">
            <h3>Luxury Clothing</h3>
            <p>Special Edition</p>
            <p>Summer Edition</p>
            <p>Unique Collection</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="language-select">
            Worldwide / English <HiChevronDown />
          </p>
          <h2 className="footer-logo">ShopNest</h2>
          <p className="rights-text"> &copy; 2025 ShopNest. All rights reserved.</p>
          <ul className="footer-links">
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Legal Notes</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
