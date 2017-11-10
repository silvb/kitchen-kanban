import React from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'
import { connect } from 'react-redux'

const Header = ({ user }) => (
  <header className="header-container">
    <div className="header-container__title">
      <h1>Kitchen Kanban</h1>
    </div>
    <div className="header-container__menu">
      <div className="header-container__menu__user">
        <UserAvatar user={user} size={48} />
      </div>
    </div>
  </header>
)

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Header)