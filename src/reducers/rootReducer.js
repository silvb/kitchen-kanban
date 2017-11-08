const initialState = {
  lists: [],
  cards: [],
  user: {}
}

const rootReducer = (state = initialState, action) => {
  const actions = {
    GET_BOARD: () => ({
      ...state,
      lists: action.lists,
      cards: action.cards,
      user: action.user,
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