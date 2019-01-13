import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

// import actions
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    console.log(
      `In onTitleChange, event.target.value = ${this.state.course.title}`
    );
    // make a local copy of component state
    const course = this.state.course;
    // update the local copy of state to the latest value
    course.title = event.target.value;

    // update component state
    this.setState({ course: course });
  }

  onClickSave(event) {
    console.log(`dispatching the "CREATE_COURSE" action `);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render() {
    return (
      <div>
        <h1>Courses....</h1>
        <h2>Add Course</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input type="submit" onClick={this.onClickSave} value="save" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // state.courses is defined in the rootReducer
  return {
    courses: state.courses
  };
}

// The connect function accepts two parmeters, and it returns a function
// that wraps CoursesPage
export default connect(mapStateToProps)(CoursesPage);
