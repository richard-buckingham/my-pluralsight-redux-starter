// import action constants
import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      console.log("handlig the CREATE_COURSE action in the reducer");
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
