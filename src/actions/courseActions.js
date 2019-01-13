// define action creators
export function createCourse(course) {
  console.log("creating the CREATE_COURSE action");
  return {
    type: "CREATE_COURSE",
    course
  };
}
