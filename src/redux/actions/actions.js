import axios from "axios";

export const increFun = (state) => {
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  state.value += 1;
};

export const decreFun = (state) => {
  state.value -= 1;
};

export const increByAmoFun = (state, action) => {
  state.value += action.payload;
};

export const verifyNumber = async (state, action) => {
  let resp = await axios.post(
    "http://103.149.154.53/Takkout/public/api/CheckAvailability",
    action.payload
  );
  let result = await resp.data;
  console.log(result, "check result");
  state.apiResp = result;
};
