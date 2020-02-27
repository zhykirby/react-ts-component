import React from 'react';
import Login from '../../component/login/Login';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class login extends React.Component<{}> {
    render() {
        return (
            <div>
                ssss
                <Login />
            </div>
        )
    }
}

export default withRouter(connect()(login));