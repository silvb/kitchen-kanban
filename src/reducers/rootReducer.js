const initialState = {
  lists: [],
  cards: [],
}

const rootReducer = (state = initialState, action) => {
  const actions = {
    GET_BOARD: () => ({
      ...state,
      lists: action.lists,
      cards: action.cards,
    }),
    // ORDER_BEERS: () => ({
    //   ...state,
    //   isFetching: true,
    // }),
    // RECEIVE_BEERS: () => ({
    //   ...state,
      
    //   isFetching: false,
    //   beers: action.beers
    // }),
    default: () => state,
  }

  return (actions[action.type] || actions.default)()
}

export default rootReducer