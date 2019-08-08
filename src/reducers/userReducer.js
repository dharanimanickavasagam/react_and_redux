import { ADD_USER } from "../constants/action-types";

const initialState = {
  user: " "
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      state.user = payload;
      return Object.assign({}, state, {
        user: state.user
      });

    default:
      return state;
  }
};

export default userReducer;
