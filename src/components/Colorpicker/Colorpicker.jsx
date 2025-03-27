import s from "./Colorpicker.module.css";
import colors from "../../assets/colors.json";
import { useState } from "react";

const Colorpicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => setCurrentColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Colorpicker;
