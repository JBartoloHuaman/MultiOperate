import { useState } from "react";
import styles from "./styles.module.css";
function Buttons() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0)
  
  const handleClick = (event) => {
    const clickedNumber = event.target.id;
    if (number === "0" && clickedNumber === "0") {
      return;
    }
    setNumber((prevNumber) =>
      prevNumber === "0" ? clickedNumber : prevNumber + clickedNumber
    );
    setResult(Number(number))
  };

  return (
    <div className={styles.gridContainer}>
      <input type="text" className={styles.result} disabled value={result}/>
      <button className={styles.clear}>limpiar</button>
      <button className={styles.delete}>&#9003;</button>
      <button
        id="1"
        onClick={handleClick}
        className={`${styles.number1} ${styles.button}`}
      >
        1
      </button>
      <button
        id="2"
        onClick={handleClick}
        className={`${styles.number2} ${styles.button}`}
      >
        2
      </button>
      <button
        id="3"
        onClick={handleClick}
        className={`${styles.number3} ${styles.button}`}
      >
        3
      </button>
      <button
        id="4"
        onClick={handleClick}
        className={`${styles.number4} ${styles.button}`}
      >
        4
      </button>
      <button
        id="5"
        onClick={handleClick}
        className={`${styles.number5} ${styles.button}`}
      >
        5
      </button>
      <button
        id="6"
        onClick={handleClick}
        className={`${styles.number6} ${styles.button}`}
      >
        6
      </button>
      <button
        id="7"
        onClick={handleClick}
        className={`${styles.number7} ${styles.button}`}
      >
        7
      </button>
      <button
        id="8"
        onClick={handleClick}
        className={`${styles.number8} ${styles.button}`}
      >
        8
      </button>
      <button
        id="9"
        onClick={handleClick}
        className={`${styles.number9} ${styles.button}`}
      >
        9
      </button>
      <button className={`${styles.division} ${styles.button}`}>÷</button>
      <button className={`${styles.product} ${styles.button}`}>x</button>
      <button className={`${styles.resta} ${styles.button}`}>-</button>
      <button className={`${styles.suma} ${styles.button}`}>+</button>
      <button className={`${styles.equal} ${styles.button}`}>=</button>
      <button id="0" onClick={handleClick} className={`${styles.cero} ${styles.button}`}>0</button>
      <button className={`${styles.dot} ${styles.button}`}>.</button>
    </div>
  );
}

export default Buttons;
