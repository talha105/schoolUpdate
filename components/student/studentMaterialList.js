import React, { Component } from 'react';
import {
    Content,
} from "native-base";
import {View} from "react-native"
import Material from "./material"
class StudentMaterialList extends Component {
    render() {
        return (
            <Content padder>
                <View style={style.container}>
                <Material 
                go="notification" 
                student={this.props.student}
                iconName="ios-notifications" 
                text="Notification"
                />
                <Material 
                go="circular" 
                student={this.props.student}
                iconName="md-refresh-circle" 
                text="Circular"
                />
                <Material 
                go="attendance" 
                student={this.props.student} 
                iconName="md-calendar" 
                text="Attendence"
                />
                </View>
                <View style={style.container}>
                <Material 
                go="challan" 
                student={this.props.student}  
                iconName="md-clipboard" 
                text="Challan"
                />
                <Material  
                go="guardians" 
                student={this.props.student}
                iconName="ios-people" 
                text="Guardians"
                />
                <Material  
                go="diary" 
                student={this.props.student}
                iconName="ios-create" 
                text="Diary"
                />
                </View>
                <View style={style.container}>
                <Material  
                go="newsletter" 
                student={this.props.student}
                iconName="md-mail-open" 
                text="Newsletter"
                />
                <Material 
                go="homeWork" 
                student={this.props.student}  
                iconName="md-list-box" 
                text="Assessments"
                />
                <Material  
                go="timetable" 
                student={this.props.student}
                iconName="ios-timer" 
                text="Timetable"
                />
                </View>
                <View style={style.container}>
                <Material 
                go="syllabus" 
                student={this.props.student}
                iconName="ios-list-box" 
                text="Syllabus"
                />
                <Material 
                go="events" 
                student={this.props.student}
                iconName="ios-stopwatch" 
                text="Events"
                />
                <Material 
                go="contact" 
                student={this.props.student}
                iconName="ios-call" 
                text="Contact"
                />
                </View>
            </Content>
        );
    }
}
const style={
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-between',
        alignContent:"space-between"
    },
}
export default StudentMaterialList;