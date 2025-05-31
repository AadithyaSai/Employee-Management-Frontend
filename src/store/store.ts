import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
export type rootState = ReturnType<typeof store.getState>;
