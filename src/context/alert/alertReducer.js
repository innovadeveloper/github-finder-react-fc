import { SET_ALERT, REMOVE_ALERT } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
        return {alert : action.payload};
    //   return {
    //     ...state,
    //     alert: action.payload,
    //   };
    case REMOVE_ALERT:
      return {alert : null};
    default:
      return state;
  }
};
export default reducer;
