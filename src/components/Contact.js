import React from "react";

const Contact = () => {
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    maxWidth: "400px",
    border: "1px solid #ddd",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const textStyle = {
    margin: "8px 0",
    fontSize: "16px",
    color: "#555",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "500",
    marginLeft: "5px",
  };

  const iconStyle = {
    color: "#007bff",
    marginRight: "8px",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        Liên hệ với chúng tôi để tư vấn hay mua sản phẩm
      </h2>
      <p style={textStyle}>
        <i className="fas fa-envelope" style={iconStyle}></i>
        <span>Email:</span>
        <a href="mailto:doanphamtandung2003@gmail.com" style={linkStyle}>
          doanphamtandung2003@gmail.com
        </a>
      </p>
      <p style={textStyle}>
        <i className="fas fa-phone" style={iconStyle}></i>
        <span>Điện thoại:</span>
        <a href="tel:0393015603" style={linkStyle}>
          0393015603
        </a>
      </p>
    </div>
  );
};

export default Contact;
