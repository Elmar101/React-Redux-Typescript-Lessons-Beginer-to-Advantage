import { UPDATE_USER } from './../../actions/action-types/userTypes';
import { Action } from "redux";
interface ISTATE {
    username: string;
}

interface IACTION extends Action<string> {
    payload: {
        username: string
    }
}

const initialState: ISTATE = {
    username: "Elmar"
}


export const userReducer = ( state: ISTATE = initialState, action: IACTION) => {
        switch(action.type){
            case UPDATE_USER:
                return {
                    ...state,
                    username: action.payload.username
                }

            default : return state
        }
};