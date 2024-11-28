import React from "react";
import PTList from "../components/PTList";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="home">
      <h1>Gym TẤN DŨNG</h1>
      <p>
        Khám phá các sản phẩm dụng cụ tập gym và quần áo thể thao chất lượng cao
        chỉ có ở gym TẤN DŨNG.
      </p>
      <PTList />
      <Reviews />
    </div>
  );
};

export default Home;
