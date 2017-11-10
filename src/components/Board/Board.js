import React from 'react'
import List from '../List/List'
import Button from '../Button/Button'
import { addCard } from '../../actions/actions'
import { connect } from 'react-redux'

const Board = ({ cards, moveCard, addCard, user }) => {
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
      <div className="board__header">
        <Button onClick={() => addCard('This is a new shiny task', user, 0)} icon="plus" text="Add Todo" />
      </div>
      <div className="board__content">
        {
          renderLists(lists, cards, moveCard)
        }
      </div>
    </div>
  )
}



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

const mapStateToProps = ({ user, cards }) => ({ user, cards })

export default (connect(mapStateToProps, { addCard })(Board))