import React, { Component } from 'react';
import SiderBar from './pages/side';
import Pane from './pages/tab';
import Login from './pages/login';
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

  state = {
    tabbar:'0',
    loginStatus:false
  }

  cb(val){
    console.log(val);
    this.setState({tabbar:val.key});
  }
  handleLogin = () => {
    console.log('handleLogin');
    let self = this;
    this.setState({loginStatus:true});
    setTimeout(function(){
      console.log('setTimeout:',self.state.loginStatus);
    },1000);
  }
  render() {
    return (
        <div>{!this.state.loginStatus ?
            <Layout>
              <Header  style={{ background: '#fff' }}>Header</Header>
              <Content style={{ padding: '0 400px'}}>
                <Login cb={this.handleLogin.bind(this)}/>
              </Content>
            </Layout>
             :
            <Layout>
          <Header  style={{ background: '#fff' }}>Header</Header>
          <Layout style={{ minHeight: '90vh' }}>
            <Sider width={256} style={{ background: '#fff' }}><SiderBar cb={this.cb.bind(this)} /></Sider>
            <Content><Pane tab={this.state.tabbar} /></Content>
          </Layout>
        </Layout> }

        </div>
    );
  }
}

export default App;
