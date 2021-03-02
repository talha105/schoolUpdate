import React, { Component } from 'react';
import {FlatList, StyleSheet} from "react-native";
import {
    Card,
    CardItem,
    Text,
    Right,
    Left,
    Body
} from "native-base";

class NoticeList extends Component {
    state={data:[]}

    componentDidMount(){
        this.setState({
            data:this.props.student.StudentNoticeBoard
        })
    }
    renderNotice=({item})=>(
        <Card>
            <CardItem bordered style={styles.header}>
                <Left >
                <Text>{item.Title}</Text>
                </Left>
                <Right>
                <Text note>{item.Date.slice(0,10)}</Text>
                </Right>
            </CardItem>
            <CardItem>
                <Left>
                <Text note>{item.Notice}</Text>
                </Left>
            </CardItem>
        </Card>
    )
    render() {
        return (
            <FlatList
            data={this.state.data}
            renderItem={this.renderNotice}
            keyExtractor={(item,i)=>i}
            style={{marginLeft:10,marginRight:10}}
            />
        );
    }
}
const styles={
    header:{
        backgroundColor:'#F0F0F0'
    }
}

export default NoticeList;