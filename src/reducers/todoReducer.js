export const todoReducer = (state, action) => {
  switch (action.type) {
    case "todo__data":
      return { ...state, todos: action.payload };

    case "todo__subdata":
      return { ...state, subdata: action.payload };

    default:
      break;
  }
};
