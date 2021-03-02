import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {Container,Content} from "native-base"
import DateTime from 'react-native-customize-selected-date';
import StudentProfile from "../student/studentProfile";
import _ from 'lodash';

export default class Attendance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      present:[],
      absent:[],
      late:[],
      holiday:[]
    }
  }
  componentDidMount(){

    const {StudentAttendances}=this.props.route.params;
    const presentData=_.filter(StudentAttendances,a=>a.status==="Present");
    const absentData=_.filter(StudentAttendances,a=>a.status==="Absent");
    const lateData=_.filter(StudentAttendances,a=>a.status==="Late");
    const holidayData=_.filter(StudentAttendances,a=>a.status==="Holiday");
    const present=_.map(presentData,d=>d.attendanceDate.slice(0,10))
    const absent=_.map(absentData,d=>d.attendanceDate.slice(0,10))
    const late=_.map(lateData,d=>d.attendanceDate.slice(0,10))
    const holiday=_.map(holidayData,d=>d.attendanceDate.slice(0,10))
    this.setState({
      present,
      absent,
      late,
      holiday
    })
  }

  onChangeDate(date) {
    alert(date)
  }

  renderChildDay(day) {
    const data=_.map(this.props.attendance,(v)=>{
      const date=v.attendanceDate.slice(0,10);
      return {...v,attendanceDate:date}
    })
    
    if (_.includes(this.state.present, day)) {
      return <Image source={require('../../assets/present.png')} style={styles.icLockRed} />
    }
    if (_.includes(this.state.absent, day)) {
      return <Image source={require('../../assets/absent.png')} style={styles.icLockRed} />
    }
    if (_.includes(this.state.late, day)) {
      return <Image source={require('../../assets/late.png')} style={styles.icLockRed} />
    }
    if (_.includes(this.state.holiday, day)) {
      return <Image source={require('../../assets/holiday.png')} style={styles.icLockRed} />
    }
  }

  render() {
    return (
      <Container>
        <StudentProfile student={this.props.route.params}/>
        <Content>
        <View>
        <DateTime
          containerStyle={{ backgroundColor: 'lightgrey',position:'relative',top:-40 }}
          currentDayStyle={{ color: 'white' }}
          weekdayStyle={{ color: 'black' }}
          warpDayStyle={{backgroundColor:'#EEEEEE',borderColor:'lightgrey'}}
          notCurrentDayOfMonthStyle={{color:'black'}}
          textDayStyle={{color:'grey'}}
          date={this.state.time}
          changeDate={(date) => this.onChangeDate(date)}
          format='YYYY-MM-DD'
          renderChildDay={(day) => this.renderChildDay(day)}
        />
        <View style={styles.parentBox}>
          <View style={styles.box}>
            <View><Image source={require('../../assets/present.png')} style={styles.im} /></View>
            <Text> : Present</Text>
            </View>
            <View style={styles.box}>
            <View><Image source={require('../../assets/absent.png')} style={styles.im} /></View>
            <Text> : Absent</Text>
            </View>
        </View>
        <View style={styles.parentBox}>
            <View style={styles.box}>
            <View><Image source={require('../../assets/late.png')} style={styles.im} /></View>
            <Text> : Late</Text>
            </View>
            <View style={styles.box}>
            <View><Image source={require('../../assets/holiday.png')} style={styles.im} /></View>
            <Text> : holiday</Text>
            </View>
        </View>    
      </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icLockRed: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 6,
    left: 5
  },
  im: {
    width: 25,
    height: 25,
  },
  box:{
    position:'relative',
    top:-30,
    marginBottom:20,
    marginRight:10,
    marginLeft:10,
    display:'flex',
    height:40,
    borderRadius:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    backgroundColor:'lightgrey'
  },
  parentBox:{
    marginTop:10,
    display:'flex',


    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  

  }
});

