import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
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
    // make a local copy of component state
    const course = this.state.course;
    // update the local copy of state to the latest value
    course.title = event.target.value;

    // update component state
    this.setState({ course: course });
  }

  onClickSave(event) {
    console.log(`dispatching the "CREATE_COURSE" action `);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    console.log(`rendering the updated state... `);
    return (
      <div>
        <h1>Courses....</h1>
        {this.props.courses.map(this.courseRow)}

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

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("courses page receiving the updated state", state.courses);
  return {
    courses: state.courses // See: reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// The connect function accepts two parmeters, and it returns a function
// that wraps CoursesPage
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
