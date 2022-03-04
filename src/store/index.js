import { configureStore } from "@reduxjs/toolkit";
import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

const stringMiddleWere = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

// const store = createStore(
//   combineReducers({ heroes, filters }),
//   compose(
//     applyMiddleware(ReduxThunk, stringMiddleWere),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// С Toolkit:
const store = configureStore({
  reducer: { heroes, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleWere),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
