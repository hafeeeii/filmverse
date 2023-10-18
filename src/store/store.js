import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userSlice from "./userSlice";
import watchlistSlice from "./watchlistSlice";

const reducers = combineReducers({
  homeSlice,
  userSlice,
  watchlistSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSlice", "watchlistSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
