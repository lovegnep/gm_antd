import { Tabs, Button } from 'antd';
import React from 'react';
import { Table, Icon, Divider } from 'antd';
const TabPane = Tabs.TabPane;

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

    columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];
    componentWillReceiveProps(nextProps) {

    }
    componentWillUnmount(){
        console.log('Player unmount.');
    }
    render() {
        return (
            <div>
                <div>I am Player {this.props.name}.</div>
                <Table dataSource={this.dataSource} columns={this.columns} />
            </div>
        );
    }
}

export default Player;