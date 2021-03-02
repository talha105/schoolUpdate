import React, { Component } from 'react';
import {Container} from "native-base"
import StudentProfile from "../student/studentProfile";
import HomeWorkList from "./homeorklist"

export default class Attendance extends Component {


  render() {
    return (
      <Container>
        <StudentProfile student={this.props.route.params}/>
          <HomeWorkList goToPdf={this.props.navigation.navigate} student={this.props.route.params}/>
      </Container>
    );
  }
}


