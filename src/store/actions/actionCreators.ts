import * as actionTypes from './actionTypes';

export interface actionCreators {
    type: string;
    payload?: any;
}

export const handleLogin = () => ({
    type: actionTypes.userLogin
});

export const ifLogin = () => ({
    type: actionTypes.ifLogin
});

export const changeAuthed = () => ({
    type: actionTypes.authed
});

export const changeSiderVisibility = () => ({
    type: actionTypes.siderVisibility
});