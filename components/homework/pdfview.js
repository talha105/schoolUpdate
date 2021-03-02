import React,{Component} from "react"
import {Container, Content, Text} from "native-base"
import StudentProfile from "../student/studentProfile";
import { WebView } from 'react-native-webview';

export default class PdfView extends Component {


  render() {
    const pdfUrl=`http://thenext-001-site1.ctempurl.com/files/homeworks/${this.props.route.params}`
    return (
      <Container>

        <WebView source={{ uri: pdfUrl }} style={{ marginTop: 20 }} />
      </Container>
    );
  }
}
