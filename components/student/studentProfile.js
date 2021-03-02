import React, { Component } from 'react';
import { Image, View } from "react-native";
import {
    Container,
    Card,
    CardItem,
    Left,
    Right,
    Body,
    Content,
    Text,
    H3,
    Icon,
    Button
} from "native-base"
class StudentProfile extends Component {
    render() {
        const api = "http://thenext-001-site1.ctempurl.com/";
        const { Stu_Name, PhotoPath, Student_ID, Stu_PerAddress } = this.props.student;
        const photoPath = PhotoPath.slice(6);
        const url = api + photoPath;
        return (
            <View style={style.parent}>
                <View style={style.background}></View>
                <View style={style.container}>
                    <Card style={style.card}>
                        <CardItem>
                            <Left>
                                <Image 
                                source={{ uri: url }} 
                                style={{ height: 130, maxWidth: 130, margin: 0, flex: 1 }} 
                                />
                            </Left>
                            <Body style={style.body}>
                                <H3>{Stu_Name}</H3>
                                <Text>ID: {Student_ID}</Text>
                                <Text note>Address: {Stu_PerAddress}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{height:40}}>
                            <Left>
                                <Text note>Class: Kg 1</Text>
                            </Left>
                            <Right style={style.icons}>
                                <Button style={style.btn} transparent><Icon name="logo-facebook" /></Button>
                                <Button style={style.btn} transparent><Icon name="compass" /></Button>
                                <Button style={style.btn} transparent><Icon name="ios-information-circle" /></Button>
                            </Right>
                        </CardItem>
                    </Card>
                </View>
            </View>
        );
    }
}
const style = {
    icons: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-between'
    },
    btn: {
        marginRight: 10,
        marginLeft: 10
    },
    card: {
        width: '90%',


    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -105
    },
    parent: {
        position: 'relative',
        height: 200
    },
    background: {
        height: 100,
        backgroundColor: 'red',
    }
}


export default StudentProfile;