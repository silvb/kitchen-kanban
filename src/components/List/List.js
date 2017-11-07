import React from 'react'
import Card from '../Card/Card'

const List = ({ name, cards }) => (
  <div className="list">
    <div className="list__header">
      <h2>
        { name }
      </h2>
    </div>
    <div className="list__content">
      {renderCards(cards)}
    </div>
  </div>
)

const renderCards = cards =>
  cards.map(({ id, listId, task, assignee }) =>
    <Card
      key={id}
      listId={listId}
      task={task}
      assignee={assignee} />
  )


export default List