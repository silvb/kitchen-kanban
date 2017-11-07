import React from 'react'

const UserAvatar = ({ name, size = 32, picture }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${Math.min((size / 2), 24)}px`,
  }

  return (
    <div className="user-avatar" style={style}>
      { renderName(name) }
    </div>
  )
}

const renderName = name => name.slice(0, 1).toUpperCase()

UserAvatar.propTypes = {

}

export default UserAvatar
