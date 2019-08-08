import { ADD_USER } from "../constants/action-types";

export const userAction = newUser => {
  return {
    type: "ADD_USER",
    payload: {
      user: newUser
    }
  };
};
