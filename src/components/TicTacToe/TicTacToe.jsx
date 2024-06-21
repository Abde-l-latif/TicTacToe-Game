import "./TicTacToe.css";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";
import { useRef, useState } from "react";
let Data = ["", "", "", "", "", "", "", "", ""];

export default function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let TitleRef = useRef(null);
  /*ref of boxes*/
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  //putting boxes in an array to do map with them

  let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, number) => {
    if (lock) {
      return 0;
    }
    if (count % 2) {
      Data[number] = "x";
      e.target.innerHTML = `<img src= ${cross}>`;
      e.target.style.pointerEvents = "none";
      setCount(++count);
    } else {
      Data[number] = "o";
      e.target.innerHTML = `<img src= ${circle}>`;
      e.target.style.pointerEvents = "none";
      setCount(++count);
    }
    console.log(Data);
    checkWinner();
  };

  const checkWinner = () => {
    /* cases 1 */
    if (Data[0] === Data[1] && Data[1] === Data[2] && Data[2] !== "") {
      won(Data[2]);
    } else if (Data[3] === Data[4] && Data[4] === Data[5] && Data[5] !== "") {
      won(Data[5]);
    } else if (Data[6] === Data[7] && Data[7] === Data[8] && Data[8] !== "") {
      won(Data[8]);
      /* cases 2 */
    } else if (Data[0] === Data[3] && Data[3] === Data[6] && Data[6] !== "") {
      won(Data[6]);
    } else if (Data[1] === Data[4] && Data[4] === Data[7] && Data[7] !== "") {
      won(Data[7]);
    } else if (Data[2] === Data[5] && Data[5] === Data[8] && Data[8] !== "") {
      won(Data[8]);
    } else if (Data[0] === Data[4] && Data[4] === Data[8] && Data[8] !== "") {
      /* cases 3 */
      won(Data[8]);
    } else if (Data[2] === Data[4] && Data[4] === Data[6] && Data[6] !== "") {
      won(Data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      TitleRef.current.innerHTML = `congratulation: the winner is <img src=${cross}>`;
    } else if (winner === "o") {
      TitleRef.current.innerHTML = `<span>congratulation:</span> the winner is <img src=${circle}>`;
    }
  };

  const reset = () => {
    TitleRef.current.innerHTML = `Tic Tac Toe Game with <span> React </span>`;
    Data = ["", "", "", "", "", "", "", "", ""];
    boxes.map((e) => {
      e.current.innerHTML = "";
      return (e.current.style.pointerEvents = "auto");
    });
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title" ref={TitleRef}>
        Tic Tac Toe Game with <span> React </span>
      </h1>
      <div className="main">
        <div className="rowOne">
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 0);
            }}
            ref={box1}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 1);
            }}
            ref={box2}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 2);
            }}
            ref={box3}
          ></div>
        </div>
        <div className="rowTwo">
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 3);
            }}
            ref={box4}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 4);
            }}
            ref={box5}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 5);
            }}
            ref={box6}
          ></div>
        </div>
        <div className="rowThree">
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 6);
            }}
            ref={box7}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 7);
            }}
            ref={box8}
          ></div>
          <div
            className="board"
            onClick={(e) => {
              toggle(e, 8);
            }}
            ref={box9}
          ></div>
        </div>
      </div>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
