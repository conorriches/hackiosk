import { combineReducers } from 'redux'
import statement from './statement'
import snackspace from './snackspace'

const App = combineReducers({
  statement,
  snackspace
})

export default App