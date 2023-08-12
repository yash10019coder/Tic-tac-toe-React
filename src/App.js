import React, { useState } from "react";
import Square from "./components/Square";
import "./styles.css";
import { set } from "lodash";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isTurnX, setIsTurnX] = useState(true);

  function handleClick(position) {
    console.log("click", { position });
    if (calcuateWinningState()) {
      return;
    }
    const nextSquares = squares.slice();

    if (isTurnX && nextSquares[position] === null) {
      nextSquares[position] = "X";
      setSquares(nextSquares);
      setIsTurnX(false);
    } else if (!isTurnX && nextSquares[position] === null) {
      nextSquares[position] = "O";
      setSquares(nextSquares);
      setIsTurnX(true);
    }
  }

  function calcuateWinningState() {
    if (
      (squares[0] === squares[1] &&
        squares[1] === squares[2] &&
        squares[0] !== null) ||
      (squares[3] === squares[4] &&
        squares[4] === squares[5] &&
        squares[3] !== null) ||
      (squares[6] === squares[7] &&
        squares[7] === squares[8] &&
        squares[6] !== null) ||
      (squares[0] === squares[3] &&
        squares[3] === squares[6] &&
        squares[0] !== null) ||
      (squares[1] === squares[4] &&
        squares[4] === squares[7] &&
        squares[1] !== null) ||
      (squares[2] === squares[5] &&
        squares[5] === squares[8] &&
        squares[2] !== null) ||
      (squares[0] === squares[4] &&
        squares[4] === squares[8] &&
        squares[0] !== null) ||
      (squares[2] === squares[4] &&
        squares[4] === squares[6] &&
        squares[2] !== null)
    ) {
      if (isTurnX) {
        console.log("O is the winner!");
        window.alert("O is the winner!");
        setIsTurnX(false);
        return true;
      } else {
        console.log("X is the winner!");
        window.alert("X is the winner!");
        setIsTurnX(true);
      }
      setSquares(Array(9).fill(null));
      return true;
    } else if (
      squares[0] !== null &&
      squares[1] !== null &&
      squares[2] !== null &&
      squares[3] !== null &&
      squares[4] !== null &&
      squares[5] !== null &&
      squares[6] !== null &&
      squares[7] !== null &&
      squares[8] !== null
    ) {
      window.alert("It's a tie!");
      setSquares(Array(9).fill(null));
      return true;
    }
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}
