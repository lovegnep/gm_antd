import { Tabs, Button } from 'antd';
import React from 'react';
import Player from './playerlog';

const TabPane = Tabs.TabPane;

class Pane extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 0', content: 'Content of Tab Pane 0', key: '0' }
            //{ title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            //{ title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        console.log(props.tab);
        this.state = {
            activeKey: props.tab,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    componentWillReceiveProps(nextProps) {
        let isE = false;
        for(let i = 0, len = this.state.panes.length; i < len; i++){
            console.log(this.state.panes[i].key,nextProps.tab,this.state.panes[i].key === nextProps.tab);
            if(this.state.panes[i].key === nextProps.tab){
                isE = true;
            }
        }
        if(isE){
            this.setState({activeKey: nextProps.tab});
        }else{
            this.add(nextProps.tab);
        }

    }
    add = (index) => {
        const panes = this.state.panes;
        const activeKey = `${index}`;
        panes.push({ title: `New Tab${index}`, content: `New Tab Pane${index}`, key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    mapKey = (key) => {
        console.log('mapKey:',key);
        if(key === '0'){
            return "test"
        }else if(key === '1'){
            return <Player name={key}/>
        }else{
            return <Player name={key}/>
        }
    }

    render() {
        let self = this;
        return (
            <div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{self.mapKey(pane.key)}</TabPane>)}
                </Tabs>
            </div>
        );
    }
}

export default Pane;