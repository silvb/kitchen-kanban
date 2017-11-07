import React from 'react'
import Board from '../Board/Board'
import BoardMenu from '../BoardMenu/BoardMenu'

const BoardContainer = () => (
  <div className="board-container">
    <Board />
    <BoardMenu />
  </div>
)

export default BoardContainer