import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import reviewsReducer from "./reviewsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
  },
});
