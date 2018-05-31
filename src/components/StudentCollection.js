import React, { Component } from 'react';
import Student from './Student'
import NewStudentForm from './NewStudentForm'

class StudentCollection extends Component {
  constructor() {
    super();

    this.state = {
      students: [
        {
          name: "Harriet Potter",
          age: 18,
          email: "harriet@hogwarts.edu",
          present: true
        },
        {
          name: "Ada",
          age: 10,
          email: "ada@hogwarts.edu",
          present: false
        }
      ]
    }
  }

  onStudentPresentChange = (studentIndex) => {
    console.log(studentIndex);

    let updatedStudents = this.state.students;
    updatedStudents[studentIndex].present = !updatedStudents[studentIndex].present;

    this.setState({
      students: updatedStudents
    });
  }

  addStudent = (student) => {
    const students = this.state.students;
    students.push(student);

    this.setState({
      students,
    });
  }

  render() {
    const studentComponents = this.state.students.map ((student, index) => {
      return (
        <li key={student.email}>
          <Student
            name={student.name}
            email={student.email}
            present={student.present}
            onStudentPresentChange={ this.onStudentPresentChange }
            index = {index}
          />
        </li>
      );
    });

    return (
      <article>
        <NewStudentForm
          addStudent={this.addStudent}
        />
        {studentComponents}
      </article>
    );
  }

}

export default StudentCollection;
