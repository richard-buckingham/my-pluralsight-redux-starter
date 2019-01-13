// import action constants
import * as types from "./actionTypes";

//define action creators
export function createCourse(course) {
  console.log("creating the CREATE_COURSE action");
  return {
    type: types.CREATE_COURSE,
    course
  };
}
