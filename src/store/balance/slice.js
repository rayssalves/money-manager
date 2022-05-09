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
      //adds 10
      state.amount = state.amount + action.payload; //the logic
    },
    //adding a other port for the withdraw logic
    withdraw: (state, action) => {
      //remove 10
      state.amount = state.amount - action.payload;
    },
    //reset the amount
    reset: (state, action) => {
      state.amount = 0;
      // state.amount = initialState.amount; Also works
    },
  },
});
//here goes the key
export const { deposit, withdraw, reset } = balanceSlice.actions;

export default balanceSlice.reducer;

//In this file we are defining keys for our reducer and exporting what are called action creator.
