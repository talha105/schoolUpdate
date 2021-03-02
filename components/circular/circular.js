import React,{Component} from 'react';
import StudentProfile from "../student/studentProfile";
import NoticeList from "./noticeList"
import {Container} from "native-base";

class Circular extends Component{
    render(){
        return (
            <Container>
            <StudentProfile student={this.props.route.params}/>
            <NoticeList student={this.props.route.params}/>
          </Container>
        );

    }

}

export default Circular;