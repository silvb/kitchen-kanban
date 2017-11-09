import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { getBoard } from './actions/actions'
import rootReducer from './reducers/rootReducer'
import './styles/index.sass'
import App from './components/App/App'

const logger = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)


const initialMockState = {
  user: {
    name: 'Silvio',
    picture: '',
  },
  cards: [
    {
      id: 0,
      lastUpdated: Date.now(),
      assignee: {
        name: '',
        picture: '',
      },
      task: 'Buy milk',
      listId: 0,
    },
    {
      id: 1,
      lastUpdated: Date.now(),
      assignee: {
        name: 'Silvio',
        picture: '',
      },
      task: 'Repair kitchen cabinet',
      listId: 2,
    },
    {
      id: 2,
      lastUpdated: Date.now(),
      assignee: {
        name: 'Claudi',
        picture: '',
      },
      task: 'Buy bread',
      listId: 2,
    },
  ],
}

store.dispatch(getBoard(initialMockState))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
