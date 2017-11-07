import React from 'react'
import CloseButton from '../CloseButton/CloseButton'

const BoardMenu = () => (
  <div className="board-menu">
    <div className="board-menu__header">
      <h3>
        Menu
      </h3>
      <CloseButton onClick={onClose} />
    </div>
    <div className="board-menu__content"></div>
  </div>
)

const onClose = () => {
  console.log('Closing BoardMenu')
}

export default BoardMenu