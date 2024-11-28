import React from "react";

const Address = () => {
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    maxWidth: "400px",
    border: "1px solid #ddd",
    position: "relative",
    bottom: "0",
  };

  const headingStyle = {
    color: "#444",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    textTransform: "uppercase",
  };

  const textStyle = {
    margin: "8px 0",
    fontSize: "16px",
    color: "#555",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1.4",
  };

  const boldTextStyle = {
    fontWeight: "bold",
    color: "#333",
    marginRight: "5px",
  };

  const iconStyle = {
    color: "#007bff",
    marginRight: "8px",
    fontSize: "18px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Địa chỉ của chúng tôi</h2>
      <p style={textStyle}>
        <i className="fas fa-map-marker-alt" style={iconStyle}></i>
        <span style={boldTextStyle}>Chi nhánh 1:</span> DDT3, Phước Trung,Nha
        Trang,Khánh Hòa 650000
      </p>
      <p style={textStyle}>
        <i className="fas fa-map-marker-alt" style={iconStyle}></i>
        <span style={boldTextStyle}>Chi nhánh 2:</span> HUD Bulding Lô
        CCO2,Thích Quản Đức,Phước long,Nha Trang
      </p>
    </div>
  );
};

export default Address;
