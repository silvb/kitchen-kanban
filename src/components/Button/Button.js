import React from 'react'

const Button = ({ onClick, icon, text }) => (
  <button className="std-btn" onClick={onClick}>
    <i className={`fa fa-${icon}`}></i>
    <span>{text}</span>
  </button>
)

export default Button