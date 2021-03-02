import {CURRENT_USER} from "../action/type";

const initialState={};

export default function currentUser(state=initialState,action) {

    switch(action.type){
        case CURRENT_USER:
            return action.payload;
        default:
            return state
    }
}