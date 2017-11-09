import React, { Component } from 'react'
import Board from '../Board/Board'
// import BoardMenu from '../BoardMenu/BoardMenu'
import { DragDropContext } from 'react-dnd'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { moveCard } from '../../actions/actions'

class BoardContainer extends Component {
  render() {
    const { cards, moveCard } = this.props
    return (
      <div className="board-container">
        <Board cards={cards} moveCard={moveCard} />
        {/* <BoardMenu /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
})

const DragDropContainer = DragDropContext(HTML5Backend)(BoardContainer)

export default connect(mapStateToProps, { moveCard })(DragDropContainer)