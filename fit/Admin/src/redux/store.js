import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./cartRedux";
import userReducer from "./userRedux";

export default configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
