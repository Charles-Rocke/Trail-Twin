
import { combineReducers, createStore } from 'redux';
import userReducer from './features/users/UserSlice';
import counterReducer from './features/counters/CounterSlice';


const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})


const store = createStore(rootReducer);

export default store;