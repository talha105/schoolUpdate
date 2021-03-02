import React,{useState} from 'react';
import {Container,Content,Footer,FooterTab,Button,Text} from "native-base";
import StudentProfile from "../student/studentProfile";
import TableView from "./table";
import ExamTimeTable from "./examTimeTable";
function Timetable(props) {
    const [renderTable,setRenderTable]=useState('classTimetable');
    return (
        <Container>
            <StudentProfile student={props.route.params}/>
            <Content>
                {renderTable==="classTimetable"?<TableView student={props.route.params}/>:<ExamTimeTable student={props.route.params}/>}
            </Content>
            <Footer>
          <FooterTab>
            <Button 
            active={renderTable==="classTimetable"?true:false}
            onPress={()=>setRenderTable('classTimetable')}
            >
              <Text>Class Timetable</Text>
            </Button>
            <Button 
            active={renderTable==="examTimetable"?true:false}
            onPress={()=>setRenderTable('examTimetable')}
            >
              <Text>Exam Timetable</Text>
            </Button>
          </FooterTab>
        </Footer>
            
        </Container>
    );
}

export default Timetable;