// 容器组件
import React from 'react';
import SiderBar from '../../../component/SiderBar/siderbar';
import { IState } from '../../../declare/store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// type State = Readonly<typeof

class Sider extends React.Component<any, any> {
    render () {
        const { visibility } = this.props
        return (
            <SiderBar visibility={visibility}/>
        )
    }
}

const mapStateToProps = (state:IState) => {
    return {
        visibility: state.siderVisibility
    }
}

export default withRouter(connect(mapStateToProps, null)(Sider));
