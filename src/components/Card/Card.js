import React from 'react'
import UserAvatar from '../UserAvatar'

const Card = ({ task, assignee, listId }) => (
  <div className="card">
    <div className="card__task">{task}</div>
    <div className="card__assignee">
      <UserAvatar name={assignee} />
    </div>
  </div>
)

export default Card