import { createSlice } from "@reduxjs/toolkit";
//Import the ProductsData from the ProductsData.js file.
import { ProductsData } from "../ProductsData";

//Create a variable for the initialState and assign the data from the ProductsData
const initialState = { value: ProductsData }; // %%%%%%%%%

export const productSlice = createSlice({
  //create the reducters
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {},
    deleteproduct: (state, action) => {},
    updateProduct: (state, action) => {},
  },
});
//export all the action
export const { addProduct, deleteproduct, updateProduct } =
  productSlice.actions;

//export the reducer
export default productSlice.reducer;
