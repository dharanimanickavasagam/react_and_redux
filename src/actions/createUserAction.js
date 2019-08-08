export const createUserAction = userName => {
  return {
    type: "createUserAction",
    payload: {
      user: userName
    }
  };
};
