import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./SocialMediaFooter.css";

const SocialMediaFooter = () => {
  return (
    <div className="social-footer">
      <FaFacebook size={24} />
      <FaInstagram size={24} />
      <FaTwitter size={24} />
    </div>
  );
};

export default SocialMediaFooter;
