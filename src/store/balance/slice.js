// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};
//function that returns action object
export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    //also need to add the parameters
    deposit: (state, action) => {
      state.amount = state.amount + action.payload; //the logic
    },
    withdraw: (state, action) => {},
  },
});
//here goes the key
export const { deposit } = balanceSlice.actions;

export default balanceSlice.reducer;

//In this file we are defining keys for our reducer and exporting what are called action creator.
