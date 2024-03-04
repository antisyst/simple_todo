import { createStore, combineReducers } from "redux";
import recordReducer from "./reducers/recordReducer";

const rootReducer = combineReducers({
  recordReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
