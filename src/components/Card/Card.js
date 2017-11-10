import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../constants/itemTypes'
import UserAvatar from '../UserAvatar/UserAvatar'

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag: ({ listId, cardId }) => ({ listId, cardId }),
}

/**
 * Specifies the props to inject into your component.
 */
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

const Card = ({ task, assignee, rotation, connectDragSource, isDragging }) =>
  connectDragSource(
    <div className={`card ${isDragging ? 'card-hide' : ''}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}>
      <div className="card__task">{task}</div>
      <div className="card__assignee">
        <UserAvatar user={assignee} />
      </div>
    </div>
  )

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card)