import React, { Component } from 'react';
import {
    Content,
    Card,
    CardItem,
    Left,
    Right,
    Text
} from "native-base"
class ChallanList extends Component {


    renderChallanList=()=>{
        const {FeeVoucher}=this.props.student
        return FeeVoucher.map((feeVoucher)=>{
            return (
                <Card key={feeVoucher.Voucher_No}>
                    <CardItem bordered style={{backgroundColor:'#F0F0F0'}}>
                        <Left>
                            <Text>Voucher No</Text>
                        </Left>
                        <Right>
                            <Text note>{feeVoucher.Voucher_No}</Text>
                        </Right>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Text>Due Date</Text>
                        </Left>
                        <Right>
                            <Text note>{feeVoucher.DueDate.slice(0,10)}</Text>
                        </Right>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Text>Paid Amount</Text>
                        </Left>
                        <Right>
                            <Text note>{feeVoucher.PaidAmount?feeVoucher.PaidAmount:'0.00'}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>Paid Date</Text>
                        </Left>
                        <Right>
                            <Text note>{feeVoucher.PaidDate?feeVoucher.PaidDate.slice(0,10):'undefine'}</Text>
                        </Right>
                    </CardItem>
                </Card>
            )
        })
    }
    render() {
        return (
            <Content padder>
                {this.renderChallanList()}
            </Content>
        );
    }
}

export default ChallanList;




{/* <Text>{feeVoucher.DueDate}</Text>
<Text>{feeVoucher.PaidAmount}</Text>
<Text>{feeVoucher.PaidDate}</Text> */}