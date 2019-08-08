import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";

// With redux-thunk we can overcome the problem and return functions from action creators.
// Inside that function we can call APIs, delay the dispatch of an action, and so on.

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export const articleAction = payload => {
  return {
    type: "ADD_ARTICLE",
    payload
  };
};
