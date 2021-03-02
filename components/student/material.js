import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Card,
    CardItem,
    Body,
    Icon,
    Text,
} from "native-base";
import {View,TouchableOpacity} from "react-native";

function Material(props){
    
        const navigation=useNavigation();
        const {
            iconName,
            text,
            go
        }=props;
        return (
            <Card style={style.card}>
                <TouchableOpacity onPress={()=>navigation.navigate(go,props.student)}>
                <CardItem>
                        <View style={style.iconContainer}><Icon  style={style.icon} name={iconName}/></View>
                </CardItem>
                <CardItem>
                        <View style={style.iconContainer}>
                        <Text note>{text}</Text>
                        </View>
                </CardItem>
                </TouchableOpacity>
            </Card>
        );
}
const style={
    card:{
        width:'31%',
    },
    icon:{
        color:'#FF5C5C',
        fontSize:40
    },
    iconContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
}

export default Material;