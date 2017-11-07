import {
  GET_BOARD,
} from '../constants/actionTypes'

export const getBoard = ({ cards, lists }) => ({ type: GET_BOARD, cards, lists })