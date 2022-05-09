import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/slice";

const store = configureStore({
  //This function creates a store for us and configures it with all the basic settings we are going to need.
  //It also means that the state we define in balance/slice.js will be available in the store through reduxState.balance.
  reducer: {
    balance: balanceReducer,
  },
});

export default store;
