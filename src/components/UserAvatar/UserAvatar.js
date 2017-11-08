import React from 'react'

const UserAvatar = ({ user, size = 32 }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${Math.min((size / 2), 24)}px`,
  }

  return (
    <div className="user-avatar" style={style}>
      { renderUser(user) }
    </div>
  )
}

const renderUser = user => {
  const picture = user.picture
  const name = user.name.slice(0, 1).toUpperCase()
  return picture || name

}

UserAvatar.propTypes = {

}

export default UserAvatar
