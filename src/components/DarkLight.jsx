import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dark, light } from "../features/darkLightSlice";

export default function DarkLight() {
  // @ts-ignore
  const darkLight = useSelector((state) => state.darkLight.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid",
          backgroundColor: darkLight,
        }}
      ></div>
      <div>
        <button onClick={() => dispatch(dark())}>Light</button>

        <button onClick={() => dispatch(light())}>Dark</button>
      </div>
    </div>
  );
}
