import { FOUND_BAD_WORD } from "../constants/action-types";

export const forbiddenNameAction = payload => {
  return {
    type: "FOUND_BAD_WORD",
    payload
  };
};
