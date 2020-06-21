import {createStore} from 'redux';
import reducer from '../Redux/App/reducer'

const store = createStore(reducer)
export default store