import axios from "axios";
import Asyncstorage from "@react-native-async-storage/async-storage";
import {
CURRENT_USER, TOKEN,EMPTY_TOKEN
} from "./type";


const userApi='http://thenextschool-001-site1.gtempurl.com/api/AppLogin/GetUserLogin';
const tokenApi='http://thenextschool-001-site1.gtempurl.com/api/AppLogin/GetUserLoginByToken';
const sendNot='http://thenextschool-001-site1.gtempurl.com/api/AppLogin/NotificationToken'

export const loginRes=(d,spinnerRender,navigation)=>async(dispatch)=>{

    const token=await Asyncstorage.getItem('UserToken');

    if(token){
        const tokenRes=await axios.post(tokenApi,{
            UserToken:token
    });
    dispatch({
        type:CURRENT_USER,
        payload:tokenRes.data
    });
    }
    
    else{
        const res=await axios.post(userApi,{
            UserName:d.userName,
            Password:d.password,
            Token:"abe9fad8-7852-43ed-9ab9-fcea44da49b8"
    });
    if(res.data.Error){
        dispatch({
            type:CURRENT_USER,
            payload:res.data
        });

    }else{
        const tokenRes=await axios.post(tokenApi,{
            UserToken:res.data.UserInfo.UserToken
        });
        await Asyncstorage.setItem('UserToken',res.data.UserInfo.UserToken)
        dispatch({
            type:CURRENT_USER,
            payload:tokenRes.data
        });

    }
        spinnerRender();

    }


}
export const getToken=()=>async(dispatch)=>{
    const token=await Asyncstorage.getItem('UserToken');
    dispatch({
        type:TOKEN,
        payload:token
    })
}

export const logOut=()=>async(dispatch)=>{
    await Asyncstorage.removeItem('UserToken');
    await Asyncstorage.removeItem('pushToken')
    dispatch({
        type:EMPTY_TOKEN,
        payload:null
    })
}

export const saveToken=(userId,token)=>async(dispatch)=>{

    console.log("token",token)

    const tokenRes=await axios.post(sendNot,{
        User_Id:userId,
        NotificationToken:token
});
console.log("not",tokenRes.data)
}