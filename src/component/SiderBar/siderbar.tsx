// 展示组件
import React from 'react';
import { Menu, Icon} from 'antd';
import styles from './siderStyles.less'

const MenuItem = Menu.Item;
const {SubMenu} = Menu;

interface IProps {
    visibility: {siderVisibility:boolean};
}

// 先写个手动版，自动导入版后期再替换
const SiderBar: React.FC<IProps> = props => {
    console.log(props.visibility)
    return (
        <div className={styles.main} >
            <Menu
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode='inline'
                inlineCollapsed={props.visibility.siderVisibility}
            >
                <MenuItem key="1" onClick={() => {}}>
                    <Icon type="pie-chart" />
                    <span>&nbsp;&nbsp;&nbsp;测试</span>
                </MenuItem>
                <MenuItem key="2" onClick={() => {}}>
                    <Icon type="pie-chart" />
                    <span>&nbsp;&nbsp;&nbsp;测试2</span>
                </MenuItem>
                <SubMenu
                    key="sub1"
                    title={
                    <span>
                        <Icon type="mail" />
                        <span>Navigation One</span>
                    </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                    <span>
                        <Icon type="appstore" />
                        <span>Navigation Two</span>
                    </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default SiderBar;