import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  verifyNum,
} from "../redux/reducers/counter";

export function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const [formState, setFormState] = useState({
    countryCode: "+91",
    mobile: 0,
  });

  console.log(count, "check selector state");
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count.counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByAmount(Number(state)))}
      >
        Clickme!
      </button>

      <div>
        <input
          type="number"
          onChange={(e) => {
            setFormState({
              ...formState,
              mobile: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            const formData = new FormData();
            formData.append("mobileNumber", formState.mobile);
            formData.append("countryCode", formState.countryCode);
            dispatch(verifyNum(formData));
          }}
        >
          Click me for verify
        </button>
      </div>
    </div>
  );
}
