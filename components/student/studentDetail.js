import React, { Component } from 'react';
import {View} from "react-native"
import StudentProfile from "./studentProfile";
import StudentMaterialList from "./studentMaterialList";
import Attendance from "../attendance/attendance"
import {
    Container, Content,
} from "native-base"
import StudentMaterialLiSt from './studentMaterialList';
class StudentDetail extends Component {

    render() {
        return (
            <Container>
                <StudentProfile student={this.props.route.params}/>
                <StudentMaterialLiSt student={this.props.route.params}/>
            </Container>
        );
    }
}


export default StudentDetail;