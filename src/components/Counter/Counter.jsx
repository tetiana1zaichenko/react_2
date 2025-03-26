import { useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const HendlePlusClick = (e) => {
    console.log(e);
  };
  const sayHello = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button className="btn">minus</button>
          <button onClick={() => sayHello("Igor")}> reset</button>
          <button onClick={HendlePlusClick}>plus</button>
        </div>
      </div>
    </div>
  );
};
