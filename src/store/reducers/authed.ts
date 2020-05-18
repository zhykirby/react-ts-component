import { actionCreators } from '../actions/actionCreators';
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
    authed: false
}

const Authorize = (state = defaultState, action:actionCreators) => {
    switch (action.type) {
        case actionTypes.authed:
            return {
                ...state,
                authed: !state.authed
            };
        default:
            return state;
    }
}

export default Authorize;