import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  articles: articleReducer
});

export default rootReducer;
