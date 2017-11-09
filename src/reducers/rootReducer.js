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
      const updatedCards = state.cards
        .map(card => {
          if (card.id === action.cardId) {
            card.listId = action.toListId
            card.lastUpdated = Date.now()
          }
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