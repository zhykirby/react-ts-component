import { actionCreators } from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';

export const user = 'guest';

const defaultState = {
    user,
};

export default (state = defaultState, action:actionCreators) => {
    switch (action.type) {
        case actionTypes.userLogin:
            return {
                ...state,
                user: 'user'
            };
        case actionTypes.ifLogin:
            return state;
        default:
            return state;   
    }     
}