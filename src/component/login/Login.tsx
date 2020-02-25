import * as React from 'react';
import loginStyles from './login.css';
import { Input, Button } from 'antd';
import { routerActions } from 'react-router-redux';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { handleLogin, changeAuthed } from '../../store/actions/actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const nBefore = (
    <div className={loginStyles.width50}>用户名</div>
)
const pwBefore = (
    <div className={loginStyles.width50}>密码</div>
)

export interface Ilogin {
    login: Function;
    toMain: Function;
    state?: any;
}

function onLoading(login:Function, history:any) {
    return new Promise ((resolve, reject) => {
        changeAuthed()
        resolve(login());
    }).then(() => {
        history.push('/main/test');
    })
}

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => bindActionCreators({
    login: () => handleLogin(),
    toMain: () => routerActions.push('/login'),
    changeAuthed: () => changeAuthed()
}, dispatch)

const loginBox: React.FC<any> = props => {
    const { login, history } = props
    return (
        <div className={loginStyles.loginOutter}>
            <span>登录页面</span>
            <div className={loginStyles.inputBetween}>
                <Input addonBefore={nBefore} placeholder='请输入用户名' />
            </div>
            <div className={loginStyles.inputBetween}>
                <Input.Password addonBefore={pwBefore} placeholder='请输入密码' />
            </div>
            <div className={loginStyles.inputBetween}>
                <Button type='primary' onClick={() => onLoading(login, history)}>登录</Button>
            </div>
        </div>
    )
}

export default withRouter(connect(null, mapDispatchToProps)(loginBox));