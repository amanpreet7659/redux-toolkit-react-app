import { createSlice } from "@reduxjs/toolkit";
import {
  decreFun,
  increByAmoFun,
  increFun,
  verifyNumber,
} from "../actions/actions";

const initialState = {
  value: 0,
  apiResp: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: increFun,
    decrement: decreFun,
    incrementByAmount: increByAmoFun,
    verifyNum: verifyNumber,
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, verifyNum } =
  counterSlice.actions;

export default counterSlice.reducer;
