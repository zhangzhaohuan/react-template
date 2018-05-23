import intl from 'react-intl-universal';
import React, { Component } from 'react';
import logo from './logo.svg';
import { Layout, Menu, Icon } from 'antd';
import IntlPolyfill from "intl";
import './App.css';
import './App.less';
import './App.scss';
import Intlexample from './intl-universal';
import { Provider } from 'mobx-react';
import AddTodo from './components/addtodo.jsx'
import ToggleList from './components/togglelist.jsx'
import TodoList from './components/todolist.jsx'
import store from './store';


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

// For Node.js, common locales should be added in the application
global.Intl = IntlPolyfill;
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
require('intl/locale-data/jsonp/fr.js');
require('intl/locale-data/jsonp/ja.js');



const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  },
  {
    name: "繁體中文",
    value: "zh-TW"
  },
  {
    name: "français",
    value: "fr-FR"
  },
  {
    name: "日本の",
    value: "ja-JP"
  }
];

class App extends Component {

  constructor(props) {

    super(props);
    const currentLocale = SUPPOER_LOCALES[2].value; // Determine user's locale here
    intl.init({
      currentLocale,
      locales: {
        [currentLocale]: require(`./locales/${currentLocale}`)
      }
    });
  }

  render() {
    return (
      // <div className='app'>
      //   <Layout>
      //     <Header></Header>
      //     <Layout>
      //       <Sider>
      //         <Menu
      //           mode="inline"
      //           defaultSelectedKeys={['1']}
      //           defaultOpenKeys={['sub1']}
      //           style={{ height: '100%', borderRight: 0 }}
      //         >
      //           <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
      //             <Menu.Item key="1">option1</Menu.Item>
      //             <Menu.Item key="2">option2</Menu.Item>
      //             <Menu.Item key="3">option3</Menu.Item>
      //             <Menu.Item key="4">option4</Menu.Item>
      //           </SubMenu>
      //           <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
      //             <Menu.Item key="5">option5</Menu.Item>
      //             <Menu.Item key="6">option6</Menu.Item>
      //             <Menu.Item key="7">option7</Menu.Item>
      //             <Menu.Item key="8">option8</Menu.Item>
      //           </SubMenu>
      //           <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
      //             <Menu.Item key="9">option9</Menu.Item>
      //             <Menu.Item key="10">option10</Menu.Item>
      //             <Menu.Item key="11">option11</Menu.Item>
      //             <Menu.Item key="12">option12</Menu.Item>
      //           </SubMenu>
      //         </Menu>
      //       </Sider>
      //       <Content><Intlexample /></Content>
      //     </Layout>
      //     <Footer>Footer</Footer>
      //   </Layout>
      // </div>
      <div className="todo-app">
        <Provider {...store} >
          <div>
            <AddTodo />
            <ToggleList />
            <TodoList />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
