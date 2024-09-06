//Importing createSlice from @reduxjs/toolkit third party library to create slice
import { createSlice } from "@reduxjs/toolkit";

//Importing data which is our source data
import { data } from "../../data";

// creating slice to give state and reducer to components and store
const ProductSlice = createSlice({
  name: "Cart Products",

  //assigning initialstate value
  initialState: { productData: data },

  //reducer as reducer action to perform update on states
  reducers: {

    //IncreaseQuantity action used to increase the quantity of each product dynamically
    IncreaseQuantity: (state, action) => {
      const { proId: id, proQua: qua } = action.payload;

      state.productData = state.productData.map((cart) => {
        if (cart.id === id && (cart.quantity || qua) < cart.stock) {
          return { ...cart, quantity: (cart.quantity || qua) + 1 };
        } else {
          return cart;
        }
      });
    },

    //DecreaseQuantity action used to decrease the quantity of each product dynamically
    DecreaseQuantity: (state, action) => {
      const { proId: id, proQua: qua } = action.payload;

      state.productData = state.productData.map((cart) => {
        if (cart.id === id && (cart.quantity || qua) > 0) {
          return { ...cart, quantity: (cart.quantity || qua) - 1 };
        } else {
          return cart;
        }
      });
    },

    //RemoveCart action used to remove the particular product from productData dynamically
    RemoveCart: (state, action) => {
      state.productData = state.productData.filter(
        (cart) => cart.id !== action.payload
      );
    },
  },
});


//exporting reducer and reducer actions
export const { IncreaseQuantity, DecreaseQuantity, RemoveCart } =
  ProductSlice.actions;
export default ProductSlice.reducer;
