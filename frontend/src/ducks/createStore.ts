import { Store, combineReducers } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import userSlice, { initialState as userState } from "./user/slice";
import reduxThunk from "redux-thunk";
import postSlice, { initialState as postState } from "./post/slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
});

const preloadedState = () => {
  return { user: userState, post: postState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const middlewareList = [logger, reduxThunk];

const createStore = configureStore({
  reducer: rootReducer,
  middleware: middlewareList,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: preloadedState(),
});

export default createStore;
