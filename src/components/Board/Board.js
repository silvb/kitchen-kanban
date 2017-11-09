import React from 'react'
// import PropTypes from 'prop-types'
import List from '../List/List'


const Board = ({ cards, moveCard }) => {
  const lists = [
    {
      id: 0,
      name: 'To Do',
    },
    {
      id: 1,
      name: 'Will Do',
    },
    {
      id: 2,
      name: 'Done',
    },
  ]

  return (
    <div className="board">
      {
        renderLists(lists, cards, moveCard)
      }
    </div>
  )
}

// Board.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       task: String.isRequired,
//       picture: String
//       Assignee
//     })
//   )
// }

const renderLists = (lists, cards, moveCard) => {
  return lists.map(({ id, name }) => {
    const cardsInList = cards.filter(card => card.listId === id)
    return (
      <List
        key={id}
        name={name}
        cards={cardsInList}
        listId={id}
        moveCard={moveCard} />
    )
  })
}



export default Board