import { combineReducers } from "redux";
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import user from './user';
import authed from './authed';
import siderVisibility from './siderVisibility';
export default (history:History<any>) => combineReducers({
    router: connectRouter(history),
    user,
    authed,
    siderVisibility
});