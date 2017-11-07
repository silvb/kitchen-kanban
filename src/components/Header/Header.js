import React from 'react'
import UserAvatar from '../UserAvatar'

const Header = () => (
  <header className="header-container">
    <div className="header-container__title">
      <h1>Kitchen Kanban</h1>
    </div>
    <div className="header-container__menu">
      <div className="header-container__menu__user">
        <UserAvatar name={'silvio'} size={64} />
      </div>
    </div>
  </header>
)

export default Header