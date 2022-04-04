import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  // @ts-ignore
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          incrementByAmount 10
        </button>
      </div>
    </div>
  );
}
