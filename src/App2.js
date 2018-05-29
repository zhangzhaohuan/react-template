import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'mobx-react';
import logo from './logo.svg';

import { observer, inject } from 'mobx-react'

// antd国际化配置
import { LocaleProvider, Layout, Menu, Icon, Select, Pagination } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';

// react-intl-universal国际化配置
import intl from 'react-intl-universal';
import IntlPolyfill from "intl";

import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import store from './store';
import './App.css';
import './App.less';
import './App.scss';

const { Header, Footer, Sider, Content } = Layout;
const Option = Select.Option;

// For Node.js, common locales should be added in the application
// 
global.Intl = IntlPolyfill;
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
require('intl/locale-data/jsonp/fr.js');
require('intl/locale-data/jsonp/ja.js');

//universal国际化文件
const intl_locales = {
  "en-US": require("./locales/en_US.json"),
  "zh-CN": require("./locales/zh_CN.json")
}
//antd国际化文件
const antd_locales = {
  "zh_CN": require("antd/lib/locale-provider/zh_CN"),
  "en_US": require("antd/lib/locale-provider/en_US")
}

const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
      <Component {...props} />
    )
  }}
  />
)
@inject('intl')
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antd_locale: "zh_CN",
      intl_locale: "zh-CN",
      initDone: false
    }
  }

  componentDidMount = () => {
    this.loadLocales();
  }

  loadLocales = () => {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    const currentLocale = intl_locales[this.state.intl_locale];
    intl.init({
      currentLocale: this.state.intl_locale,// TODO: determine locale here
      locales: {
        [this.state.intl_locale]: currentLocale
      }
    }).then(() => {
      // After loading CLDR locale data, start to render
      this.setState({
        initDone: true
      })
      // this.forceUpdate();
    })
  }
  handleChange = (value) => {
    const intl = value.replace("_", "-");
    this.setState({
      antd_locale: value,
      intl_locale: intl
    }, () => {
      this.loadLocales();
      // console.log(this.state.intl_locale);
    })
    this.loadLocales();
  }
 
  render() {
    const locale = antd_locales[this.state.antd_locale];
    return (
      <div className='app'>
          <LocaleProvider locale={locale}>
            <div>
              <Router>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/" component={Home} />
                </Switch>
              </Router>
            </div>
          </LocaleProvider>
      </div>
    );
  }
}

export default App;