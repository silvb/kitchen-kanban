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
    ADD_CARD: () => ({
      ...state,
      cards: [...state.cards, {
        task: action.task,
        assignee: action.assignee,
        listId: action.listId,
        id: state.cards.length
      }]
    }),
    default: () => state,
  }

  console.log(action.type);

  return (actions[action.type] || actions.default)()
}

export default rootReducer