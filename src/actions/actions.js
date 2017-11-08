import {
  GET_BOARD,
} from '../constants/actionTypes'

export const getBoard = ({ cards, lists, user }) => ({ type: GET_BOARD, cards, lists, user })