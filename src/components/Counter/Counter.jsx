import { useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  //1. Хуки мають викликатись лише в функціональному компоненті
  //2. Хуки не можна викликати по умові
  //3. Хуки не можна викликати в циклах
  //4. Не можна хуки викликати за межами компонента
  const [counter, setCounter] = useState(33);
  const [step, setStep] = useState(1);

  const HendlePlusClick = (e) => {
    setCounter(counter + step);
  };
  const HendleMinusClick = (e) => {
    setCounter(counter - step);
  };
  const HendleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)}></input>
        <div className={s.flex}>
          <button onClick={HendleMinusClick} className="btn">
            minus
          </button>
          <button onClick={HendleResetClick} className="btn">
            reset
          </button>
          <button onClick={HendlePlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
