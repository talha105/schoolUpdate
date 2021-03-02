import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import StudentList from "./studentList";
import { Link } from 'react-router-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import Asyncstorage from "@react-native-async-storage/async-storage";
import { connect } from 'react-redux';
import * as actions from "../action"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

 class ParentsDashboard extends Component {
  

  async componentDidMount(){
    const pushToken=await Asyncstorage.getItem('pushToken');
    if(!pushToken){
      this.registerForPushNotificationsAsync();
    }
  }
  registerForPushNotificationsAsync=async()=>{
    let token;
    if (Constants.isDevice) {

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      this.props.saveToken(this.props.currentUser.UserInfo.User_Id,token).then(async()=>{
        await Asyncstorage.setItem('pushToken',token);
      })
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

  }
  
  render() {
    const {navigation}=this.props
    return (
      <Container>

        <Content>
          <StudentList goToStudentDetail={navigation}/>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps({currentUser}){
  return{currentUser}
}

export default connect(mapStateToProps, actions)(ParentsDashboard)