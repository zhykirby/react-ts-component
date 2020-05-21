import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sider from '../main/siderbar/container';
import { Button } from 'antd';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { changeSiderVisibility } from '../../store/actions/actionCreators';

// 改
const Test: React.FC<any> = props => {
    const { changeSiderVisibility } = props;
    return (
        <div>
            <Sider />
            <Button type='primary' onClick={() => changeSiderVisibility()} >closed</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => bindActionCreators({
    changeSiderVisibility: () => changeSiderVisibility()
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Test));