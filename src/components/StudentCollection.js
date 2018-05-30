import React, { Component } from 'react';
import Student from './Student'

class StudentCollection extends Component {
  constructor() {
    super();

    this.state = {
      students: [
        {
          name: "Harriet Potter",
          age: 18,
          email: "harriet@hogwarts.edu"
        },
        {
          name: "Ada",
          age: 10,
          email: "ada@hogwarts.edu"
        }
      ]
    }
  }

  render() {
    const studentComponents = this.state.students.map ((student) => {
      return (
        <li key={student.email}>
          <Student
            name={student.name}
            email={student.email}
            age={student.age}
          />
        </li>
      );
    });

    return (
      <article>
        {studentComponents}
      </article>
    );
  }

}

export default StudentCollection;
