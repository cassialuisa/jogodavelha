import React from 'react';
import ReactDOM from 'react-dom';
import Column from './components/Column';
import TicTacToe from './components/TicTacToe'
import Square from './components/Square';
import NomeDoJogo from './components/NomeDoJogo';
import { FC, useState } from "react";
import NewGame from './components/NewGame';

const Game: FC = () => {

  let [player, setPlayer] = useState('X')
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const play = function (row: number, col: number) {
    
    board[row][col] = player;
    setBoard(board)

    const checkWin = function () {
      for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          return board[i][0];
        }
      }
      for (let i = 0; i < board.length; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          return board[0][i];
        }
      }
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
      }
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
      }
      return false;
    }

    if (checkWin()) {
      setPlayer('')
      announceWinner();
    }
    
    player = player === 'X' ? 'O' : 'X';
    setPlayer(player)
    console.log(player)
  };

  const announceWinner = function () {
    console.log(`${player} wins!`);
 
  }
  const newGame = function () {
    setBoard([['', '', ''], ['', '', ''], ['', '', '']])
    
  }
  return (

  <React.StrictMode>
    <NomeDoJogo/>
    <NewGame
      onClick={newGame}/>
    <TicTacToe>
      <Column>
      
        <Square
          column={0}
          onClick={play}
          dataCol1={board[0][0]} dataCol2={board[0][1]} dataCol3={board[0][2]} />
      </Column>

      <Column>
        <Square
          column={1}
          onClick={play}
          dataCol1={board[1][0]} dataCol2={board[1][1]} dataCol3={board[1][2]} />
      </Column>

      <Column>
        <Square
          column={2}
          onClick={play}
          dataCol1={board[2][0]} dataCol2={board[2][1]} dataCol3={board[2][2]} />
      </Column>

    </TicTacToe>
  </React.StrictMode>)
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);


