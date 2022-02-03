import React from 'react';
class Student extends React.Component {
  render() {
    console.log('this.props::', this.props);
    return <li>{this.props.s.fullname}</li>;
  }
}
export default Student;
