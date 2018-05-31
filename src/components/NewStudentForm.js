import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };
  }

  static propTypes = {
    addStudent: PropTypes.func.isRequired,
  }

  onFieldChange = (key, value) => {
    const updatedState = {};
    updatedState[key] = value;

    this.setState(updatedState);
    console.log(`Updated = ${key}`);
  }

  emailValid = () => {
    return this.state.email.match(/\S+@\S+/);
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.emailValid()) {
      this.props.addStudent({
        name: this.state.name,
        email: this.state.email,
      });

      this.setState({
        name: '',
        email: '',
      });    
    }
  }

  render() {
    return (
      <div>
        <form
          className="new-student-form"
          onSubmit={this.onSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={(event) => { this.onFieldChange('name', event.target.value) }}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={(event) => { this.onFieldChange('email', event.target.value) }}
              value={this.state.email}
              className={this.emailValid() ? "valid" : "invalid" }
            />
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
