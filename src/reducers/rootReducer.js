const initialState = {
  lists: [],
  cards: [],
  user: {}
}

const rootReducer = (state = initialState, action) => {
  const actions = {
    GET_BOARD: () => ({
      ...state,
      cards: action.cards,
      user: action.user,
    }),
    MOVE_CARD: () => {
      console.log(action.cardId, action.toListId)
      const updatedCards = state.cards.map(card => {
        const isMovingCard = card.id === action.cardId
        card.listId = isMovingCard ? action.toListId : card.listId
        return card
      })

      return {
        ...state,
        cards: updatedCards
      }
    },
    default: () => state,
  }

  return (actions[action.type] || actions.default)()
}

export default rootReducer