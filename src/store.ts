import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";

import reducers from "./reducers/index";

const middlewares = applyMiddleware(promise(), logger);

export const store = createStore(
  reducers,
  (<any>window).__REDUX_DEVTOOLS_EXTENSION__ &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION__(),
  middlewares
);

export const persistor = persistStore(store);

export default { store, persistor };
