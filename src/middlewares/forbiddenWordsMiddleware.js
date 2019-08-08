import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          alert(foundWord + " is a Bad Word");
          return dispatch({ type: "FOUND_BAD_WORD", payload: "Error !" });
        }
      }
      return next(action);
    }; //   return function(action)
  }; // return function(next)
};
