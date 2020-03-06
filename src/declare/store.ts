import { Reducer } from 'redux';
export interface IState {
    user: Reducer<{user: string}, any>,
    authed: Reducer<{authed: boolean}, any>,
    siderVisibility: Reducer<{siderVisibility: boolean}, any>
}