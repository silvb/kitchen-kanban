import React from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'

const Card = ({ task, assignee, listId }) => (
  <div className="card">
    <div className="card__task">{task}</div>
    <div className="card__assignee">
      <UserAvatar user={assignee} />
    </div>
  </div>
)

export default Card