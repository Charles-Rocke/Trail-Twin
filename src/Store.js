// import { createStore } from 'redux';
// import rootReducer from './Reducers/rootReducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// Implementing App wide state with redux:
// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;
