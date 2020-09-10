// const initialState = {
//   list: ["Listen to music"],
//   selectedId: null,
// };

const hobbyReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      break;

      // return {
      //   ...state,
      //   list: newList,
      // };
    }
    case "SET_ACTIVE_HOBBY": {
      break;
    }
    default:
      return state;
  }
};

export default hobbyReducer;
