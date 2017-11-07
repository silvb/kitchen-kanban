import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import { getBoard } from './actions/actions'
import rootReducer from './reducers/rootReducer'
import './styles/index.sass'
import App from './components/App/App'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)


const state = {
  lists: [
    {
      id: 0,
      name: 'To Do',
    },
    {
      id: 1,
      name: 'Will Do',
    },
    {
      id: 2,
      name: 'Done',
    },
  ],
  cards: [
    {
      id: 0,
      assignee: '',
      task: 'Buy milk',
      listId: 0,
    },
    {
      id: 1,
      assignee: 'Silvio',
      task: 'Repair kitchen cabinet',
      listId: 1,
    },
    {
      id: 2,
      assignee: 'Claudi',
      task: 'Buy bread',
      listId: 2,
    },
  ],
}

store.dispatch(getBoard(state))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
