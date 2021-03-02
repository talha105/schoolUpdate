import React, { Component } from 'react';
import {Container} from "native-base"
import StudentProfile from "../student/studentProfile";
import ChallanList from "./challanList"
export default class Challan extends Component {


  render() {
    return (
      <Container>
        <StudentProfile student={this.props.route.params}/>
        <ChallanList student={this.props.route.params}/>
      </Container>
    );
  }
}


