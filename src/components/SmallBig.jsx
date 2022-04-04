import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { small, big } from "../features/smallBigSlice";

export default function SmallBig() {
  // @ts-ignore
  const smallBig = useSelector((state) => state.smallBig.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p style={{ fontSize: smallBig }}>Hello</p>
      </div>
      <div>
        <button onClick={() => dispatch(small())}>Small</button>
        <button onClick={() => dispatch(big())}>Big</button>
      </div>
    </div>
  );
}
