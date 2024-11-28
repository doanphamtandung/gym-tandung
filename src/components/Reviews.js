import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview } from "../redux/reviewsSlice";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews.items);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      dispatch(addReview({ name, comment }));
      setName("");
      setComment("");
    }
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "20px",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "15px",
    textAlign: "center",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "15px 0",
    maxHeight: "200px",
    overflowY: "auto",
  };

  const listItemStyle = {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  };

  const nameStyle = {
    fontSize: "16px",
    color: "#007bff",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const commentStyle = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.4",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
    color: "#333",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Đánh giá của khách hàng</h2>
      <ul style={listStyle}>
        {reviews.map((review, index) => (
          <li key={index} style={listItemStyle}>
            <h4 style={nameStyle}>{review.name}</h4>
            <p style={commentStyle}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          style={inputStyle}
          placeholder="Đánh giá"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          type="submit"
        >
          Gửi đánh giá
        </button>
      </form>
    </div>
  );
};

export default Reviews;
