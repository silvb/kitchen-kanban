import {
  GET_BOARD,
  MOVE_CARD,
  ADD_CARD,
} from '../constants/actionTypes'

export const getBoard = ({ cards, user }) => ({ type: GET_BOARD, cards, user })

export const moveCard = (cardId, toListId) => ({ type: MOVE_CARD, cardId, toListId })

export const addCard = (task, assignee, listId) => ({ type: ADD_CARD, task, assignee, listId })