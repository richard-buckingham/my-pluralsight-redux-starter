export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      console.log("handlig the CREATE_COURSE action in the reducer");
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
