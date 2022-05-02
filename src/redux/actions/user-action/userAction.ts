import { UPDATE_USER } from '../action-types/userTypes';
import { IUSER } from './../../../models/user';

export const updateUserAction = (user: IUSER) => {
    return {
        type: UPDATE_USER,
        payload: {
            username: user.username
        }
    }
}