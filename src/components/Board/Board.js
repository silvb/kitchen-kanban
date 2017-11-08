import React from 'react'
import List from '../List/List'
import { connect } from 'react-redux'

const Board = ({ lists, cards }) => {
  return (
    <div className="board">
      {
        renderLists(lists, cards)
      }
    </div>
  )
}

const renderLists = (lists, cards) => {
  return lists.map(list => {
    const listCards = cards.filter(card => card.listId === list.id)
    return (
      <List
        key={list.id}
        name={list.name}
        cards={listCards} />
    )
  })
}

const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards,
})

export default connect(mapStateToProps)(Board)