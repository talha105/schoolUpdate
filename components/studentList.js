import React, { Component } from "react";
import { connect } from "react-redux"
import { View } from "react-native"
import Student from "./student";

class StudentList extends Component {

    render() {
        return (
            <View>
                {this.props.currentUser.studentProfile.map((s) => {
                    return <Student
                            key={s.Student_ID}
                            student={s}
                            goToStudentDetail={this.props.goToStudentDetail}
                    />
                })}
            </View>
        )
    }
}
function mapStateToProps({ currentUser }) {
    return { currentUser }
}
export default connect(mapStateToProps, null)(StudentList);