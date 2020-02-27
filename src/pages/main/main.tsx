import React from 'react';
import styles from './main.module.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../component/login/Login';
import { renderRoutes } from 'react-router-config';

const BasicLayout: React.FC<any> = props => {
    return (
        <div className={styles.normal}>
            <h1 className={styles.title}>阴天的测试项目</h1>
            <Login />
            { renderRoutes(props.route.routes) }
        </div>
    );
};

export default withRouter(connect()(BasicLayout));