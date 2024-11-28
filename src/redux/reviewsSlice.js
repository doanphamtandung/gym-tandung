import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Minh Hằng",
      comment: "tôi rất thích sự giảng dạy trong các bài tập của các HLV",
      rating: 5,
    },
    {
      id: 2,
      name: "Nhật Minh",
      comment:
        "các HLV rất nhiệt tình khi tôi tới hởi bài tập và hướng dẫn tôi từng bước một",
    },
  ],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
