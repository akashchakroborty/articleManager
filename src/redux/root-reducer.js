import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import articlesReducer from "./articles/articles.reducer";
import alertReducer from "./alert/alert.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["articlesList"],
};

const rootReducer = combineReducers({
  articlesList: articlesReducer,
  alerts: alertReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
