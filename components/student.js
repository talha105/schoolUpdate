import React, { Component } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity, StyleSheet } from "react-native"
import { 
  Header,
  Thumbnail,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H3
} from 'native-base';
export default class Student extends Component {

  render() {
    const api = "http://thenext-001-site1.ctempurl.com/";
    const { student } = this.props;
    const photoPath = student.PhotoPath.slice(6);
    const url = api + photoPath;
    return (
      <Card>
        <TouchableOpacity onPress={()=>this.props.goToStudentDetail.navigate('studentDetail',student)} style={styles.button}>
          <CardItem>
            <Left>
              <Thumbnail large source={{ uri: url }} />
            </Left>
            <Body>
    <H3>{student.Stu_Name}</H3>
              <Text note>{student.Student_ID}</Text>
            </Body>
            <Right>
              <Icon name="ios-arrow-forward" />
            </Right>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}
const styles = StyleSheet.create({

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD"
  }
});