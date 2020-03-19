import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/rootReducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

//state也可以拆分,后面有空就拆了
const initialState = {

};

export const history = createBrowserHistory();

const store = createStore(
    reducers(history),
    initialState,
    applyMiddleware(thunk, routerMiddleware(history))
);

export default store;
