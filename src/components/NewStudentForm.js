import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form className="new-student-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input name="email" />
          </div>
          <input
            className="button success"
            type="submit"
            value="Add Student"
          />
        </form>
      </div>
    );
  }

}

export default NewStudentForm;
