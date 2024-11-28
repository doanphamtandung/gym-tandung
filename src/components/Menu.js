import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuStyle = {
    backgroundColor: "#1a1a1a",
    padding: "15px 20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const listStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#f5f5f5",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "color 0.3s ease, transform 0.2s ease",
  };

  const linkHoverStyle = {
    color: "#ff9800",
    transform: "scale(1.1)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, linkHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, linkStyle);
  };

  return (
    <nav style={menuStyle}>
      <ul style={listStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            to="/products?category=dung-cu"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Dụng cụ gym
          </Link>
        </li>
        <li>
          <Link
            to="/products?category=quan-ao"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Quần áo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
