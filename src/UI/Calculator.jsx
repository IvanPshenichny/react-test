import React from "react";
import { useState, useEffect } from "react";
import styles from "./CssModules/Content.module.css";
import styless from "./CssModules/Calculator.module.css";

function Calculator() {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState("");
  const [memory, setMemory] = useState();

  const buttonClick = (e) => {
    let value = e.target.value;
    if (num === 0) {
      setNum(value);
    }
    setNum(num + value);
  };
  const dott = () => {
    setNum (num + '.')
  }
  const deleteSymbol = () => {
    setNum(num.slice(0, num.length - 1));
  };
  const clearInput = () => {
    setNum("");
    setOperator("");
  };
  const changeSign = () => {
    if (num > 0) {
      setNum(-+num);
    } else if (num < 0) {
      setNum(Math.abs(+num));
    }
    return;
  };
  const Procent = () => {
    if (+num > 0) {
      setNum(+num / 100);
    }
    return;
  };
  const operatorHandler = (e) => {
    if (operator === "") {
      setOldNum(num);
      setNum("");
      setOperator("");
      setOperator(e.target.value);
    } else if (operator !== "") {
      if (operator === "÷") {
        setOldNum(+oldNum / +num);
        setNum("");
      } else if (operator === "×") {
        setOldNum(+oldNum * +num);
        setNum("");
      } else if (operator === "-") {
        setOldNum(+oldNum - +num);
        setNum("");
      } else if (operator === "+") {
        setOldNum(+oldNum + +num);
        setNum(+oldNum + +num);
        setNum("");
      }
    }
    return;
  };
  const calculate = () => {
    if (operator === "÷") {
      setNum(+oldNum / +num);
      setOperator("");
    } else if (operator === "×") {
      setNum(+oldNum * +num);
      setOperator("");
    } else if (operator === "-") {
      setNum(+oldNum - +num);
      setOperator("");
    } else if (operator === "+") {
      setNum(+oldNum + +num);
      setOperator("");
    } else return setNum(num);
  };
  const addMemory = () => {
    setMemory("");
    setMemory(num);
    setNum("");
  };
  const displayMemory = () => {
    setNum(memory);
  };

  return (
    <div className={styles.content}>
      <input placeholder="0" className={styless.textArea} value={num} />
      <button className={styless.deleteButton} onClick={deleteSymbol}>
        ⌫
      </button>
      <div>
        <button className={styless.headButton} onClick={clearInput}>
          AC
        </button>
        <button className={styless.headButton} onClick={changeSign}>
          +/-
        </button>
        <button className={styless.headButton} value={"%"} onClick={Procent}>
          %
        </button>
        <button
          className={styless.headButton}
          value={"÷"}
          onClick={operatorHandler}
        >
          ÷
        </button>
      </div>
      <div>
        <button className={styless.mainButtons} value={1} onClick={buttonClick}>
          1
        </button>
        <button className={styless.mainButtons} value={2} onClick={buttonClick}>
          2
        </button>
        <button className={styless.mainButtons} value={3} onClick={buttonClick}>
          3
        </button>
        <button
          className={styless.mainButtons}
          value={"×"}
          onClick={operatorHandler}
        >
          ×
        </button>
      </div>
      <div>
        <button className={styless.mainButtons} value={4} onClick={buttonClick}>
          4
        </button>
        <button className={styless.mainButtons} value={5} onClick={buttonClick}>
          5
        </button>
        <button className={styless.mainButtons} value={6} onClick={buttonClick}>
          6
        </button>
        <button
          className={styless.mainButtons}
          value={"-"}
          onClick={operatorHandler}
        >
          -
        </button>
      </div>
      <div>
        <button className={styless.mainButtons} value={7} onClick={buttonClick}>
          7
        </button>
        <button className={styless.mainButtons} value={8} onClick={buttonClick}>
          8
        </button>
        <button className={styless.mainButtons} value={9} onClick={buttonClick}>
          9
        </button>
        <button
          className={styless.mainButtons}
          value={"+"}
          onClick={operatorHandler}
        >
          +
        </button>
      </div>
      <div>
        <button className={styless.zerroButton} value={0} onClick={buttonClick}>
          0
        </button>
        <button className={styless.mainButtons} onClick = {dott}>,</button>
        <button className={styless.mainButtons} onClick={calculate}>
          =
        </button>
      </div>
      <div>
        <button className={styless.memory} onClick={addMemory}>
          M+
        </button>
        <button className={styless.memory} onClick={displayMemory}>
          M
        </button>
      </div>
    </div>
  );
}
export { Calculator };
