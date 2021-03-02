import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: "Math",
    startTime: genTimeBlock("MON", 9),
    endTime: genTimeBlock("MON", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Math",
    startTime: genTimeBlock("WED", 9),
    endTime: genTimeBlock("WED", 10, 50),
    location: "Classroom 403",
    extra_descriptions: ["Kim", "Lee"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("MON", 11),
    endTime: genTimeBlock("MON", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Physics",
    startTime: genTimeBlock("WED", 11),
    endTime: genTimeBlock("WED", 11, 50),
    location: "Lab 404",
    extra_descriptions: ["Einstein"],
  },
  {
    title: "Mandarin",
    startTime: genTimeBlock("TUE", 9),
    endTime: genTimeBlock("TUE", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Chen"],
  },
  {
    title: "Japanese",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 50),
    location: "Language Center",
    extra_descriptions: ["Nakamura"],
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 50),
    location: "Activity Center",
  },
  {
    title: "Club Activity",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 14, 50),
    location: "Activity Center",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      numOfDays:5,
      pivotDate:genTimeBlock('mon'),
      eventsData:[]
    }
  }

  componentDidMount(){
    const eventsData=this.props.student.StudentClassRoutine.map((d)=>{
      return {
        title:d.Course,
        startTime:genTimeBlock(d.Day.slice(0,3).toUpperCase(),Number(d.StartTime.slice(0,2)),Number(d.StartTime.slice(3,5))),
        endTime:genTimeBlock(d.Day.slice(0,3).toUpperCase(),Number(d.EndTimne.slice(0,2)),Number(d.EndTimne.slice(3,5)))
      }
    })
    this.setState({eventsData})
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={this.state.eventsData}
            pivotTime={9}
            pivotDate={this.state.pivotDate}
            numberOfDays={this.state.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en"
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});