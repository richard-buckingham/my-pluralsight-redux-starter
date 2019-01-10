import React, { Component, PropTypes } from "react";

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
    console.log(`${this.state.course.title}`);
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

export default CoursesPage;
