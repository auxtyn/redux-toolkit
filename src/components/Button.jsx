import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrCount, decrCount } from "../counterSlice";

const Button = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const handleIncrement = () => {
    dispatch(incrCount());
  };

  const handleDecrement =()=>{
    dispatch(decrCount())
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Button;
