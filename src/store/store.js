import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./slices/categorySlice";
import modalRecucer from "./slices/modalSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        category: categoryReducer,
        modal: modalRecucer,
        product: productReducer,
        cart : cartReducer
    }
});

export default store;