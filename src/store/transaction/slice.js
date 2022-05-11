// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};
//function that returns action object
export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    //also need to add the parameters
    registerTransaction: (state, action) => {
      //we use spread operator, because we want to maintain the history of transactions
      state.transactions = [...state.transactions, action.payload]; //the logic
    },
  },
});
//here goes the key
export const { registerTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;

//In this file we are defining keys for our reducer and exporting what are called action creator.
