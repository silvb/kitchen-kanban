import React from 'react'
import Card from '../Card/Card'
import ItemTypes from '../../constants/itemTypes'
import { DropTarget } from 'react-dnd'

const listTarget = {
  drop: (props, monitor) => {
    props.moveCard(monitor.getItem().cardId, props.listId)
  },
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})


const List = ({ name, cards, connectDropTarget, isOver }) =>
  connectDropTarget(
    <div className="list">
      <div className="list__header">
        <h2>
          { name }
        </h2>
      </div>
      <div className={`list__content ${isOver ? 'list__content-hover-card' : ''}`}>
        {
          renderCards(cards)
        }
      </div>
    </div>
  )

const renderCards = cards =>
  cards
    .sort((prev, next) =>
      prev.lastUpdated > next.lastUpdated ? 1 : -1
    )
    .map(({ id, listId, task, assignee }) =>
      <Card
        key={id}
        cardId={id}
        listId={listId}
        task={task}
        assignee={assignee} />
    )


// export default List
export default DropTarget(ItemTypes.CARD, listTarget, collect)(List)