import { actionCreators } from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';

export let siderVisibility = true;

const defaultState = {
    siderVisibility
};

export default (state = defaultState, action:actionCreators) => {
    switch (action.type) {
        case actionTypes.siderVisibility:
            return Object.assign({}, state, {
                siderVisibility: !state.siderVisibility
            })
        default:
            return state;
    }
}