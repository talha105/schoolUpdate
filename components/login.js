import React, { Component } from 'react';
import {Image} from "react-native"
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  H1,
  Spinner,
  Body
} from 'native-base';
import { connect } from "react-redux";
import * as action from "../action";
class Login extends Component {

  state = {
    userName: '',
    password: '',
    loading:false
  }
  spinnerRender=()=>{
    this.setState({loading:!this.state.loading})
  }
  render() {
    return (
      <Container>
        <Body style={{ width: '80%',display:'flex',justifyContent:'center',alignItems:'center' }}>
          <Image style={{width:150, height:150,marginBottom:20}} source={require('../assets/logo.png')}/>
          <Item error={this.props.currentUser.Error ? true : false}>
            <Icon active name='md-contacts' />
            <Input onChangeText={v => this.setState({ userName: v })} placeholder='User Name' />
          </Item>
          <Item error={this.props.currentUser.Error ? true : false}>
            <Icon active name='ios-key' />
            <Input onChangeText={v => this.setState({ password: v })} secureTextEntry placeholder='Password' />
          </Item>
          <Text>{this.props.currentUser.Error ? this.props.currentUser.Error : null}</Text>
          <Button
            onPress={() => {
              this.spinnerRender()
              this.props.loginRes(this.state,this.spinnerRender,this.props.navigation).then(()=>{
                this.props.getToken()
              })
              
            }}
            danger
            block
            style={{ marginTop: 40 }}>
              {this.state.loading?<Spinner color="white"/>:<Text>Login</Text>}
          </Button>
        </Body>
      </Container>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser }
}

export default connect(mapStateToProps, action)(Login)