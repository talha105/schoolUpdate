import React, { Component } from "react";
import {Content, Accordion,Text, Button} from "native-base";
import {View} from "react-native";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class HomeWorkList extends Component {
    state={
        dataArray:[]
    }
    componentDidMount(){
        const {student}=this.props;
        const url='http://thenext-001-site1.ctempurl.com/files/homeworks/'
        const updateDataArray=student.StudentHomeWork.map((h)=>{
            return{
            title:<View style={styles.container}><Text>{h.CourseName}</Text><Text style={styles.date} note>{h.Date.slice(0,10)}</Text></View>,
            content:<View><Text style={styles.content}>{h.HomeworkText}</Text><View style={styles.content}><Button style={styles.button} onPress={()=>this.props.goToPdf('pdfView',h.HomeworkPath)}><Text>PDF</Text></Button></View></View>
            }
        })
        this.setState({dataArray:updateDataArray})
    }
  render() {
    return (
          <Content padder>
          <Accordion  
            dataArray={this.state.dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green",fontSize:30 }}
            expandedIconStyle={{ color: "red",fontSize:30 }}
            />
          </Content>

    );
  }
}

const styles={
  container:{
    display:'flex',
    flexDirection:'row'
  },
  date:{
    marginLeft:130
  },
  content:{
    margin:10
  },
  button:{
    backgroundColor:'green'
  }
}