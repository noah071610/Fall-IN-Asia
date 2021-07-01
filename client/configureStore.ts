import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "slices";

const dev = process.env.NODE_ENV === "development";

const createStore = () => {
  const middleware = getDefaultMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: dev,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: dev,
});

export default wrapper;
