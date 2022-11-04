import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());
  console.log("nrows", nrows, "ncols", ncols);
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // DONE // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      let currentRow = [];
      for(let j = 0; j < ncols; j++) {
        if (Math.floor((Math.random() * 100) + 1) >= chanceLightStartsOn) {
          currentRow.push(false);
        } else {
          currentRow.push(true);
        }
      }
      initialBoard.push(currentRow);
    }
    console.log("initialBoard", initialBoard);
    hasWon(initialBoard);

    return initialBoard;
  }

  function hasWon(board) {
    // DONE // TODO: check the board in state to determine whether the player has won.
    console.log("hasWon", board);
    for (let i of board) {
      console.log("i", i);
      for (let j of i) {
        if (j === true) {
          console.log("FALSE");
          return false
        }
      }
    }
    console.log("TRUE");
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // DONE // TODO: Make a (deep) copy of the oldBoard
      const boardCopy = JSON.parse(JSON.stringify(oldBoard));

      // DONE // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y-1, x, boardCopy);
      flipCell(y+1, x, boardCopy);
      flipCell(y, x-1, boardCopy);
      flipCell(y, x+1, boardCopy);

      // DONE // TODO: return the copy
      return boardCopy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO
}

export default Board;
