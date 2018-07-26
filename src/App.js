import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setCookie, getCookie } from 'common/cookie.js'

// antd国际化配置
import { LocaleProvider } from 'antd';

//antd国际化文件
const antd_locales = {
  "zh_CN": require("antd/lib/locale-provider/zh_CN"),
  "en_US": require("antd/lib/locale-provider/en_US")
}

// react-intl-universal国际化配置
import intl from 'react-intl-universal';
import IntlPolyfill from "intl";

//universal国际化文件
const intl_locales = {
  "en-US": require("locales/en_US.json"),
  "zh-CN": require("locales/zh_CN.json")
}

// For Node.js, common locales should be added in the application
global.Intl = IntlPolyfill;
require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
require('intl/locale-data/jsonp/fr.js');
require('intl/locale-data/jsonp/ja.js');

//按需加载
import asyncComponent from 'common/asyncComponent';
const Home = asyncComponent(() => import('./components/home'));
const Login = asyncComponent(() => import('./components/login'));
const Register = asyncComponent(() => import('./components/register'));

import './App.css';
import './App.less';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!getCookie('lang')) {
      let lang = window.navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    this.loadLocales();
  }

  loadLocales = () => {
    const lang = getCookie('lang');
    console.log(lang);
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    const currentLocale = intl_locales[lang];
    intl.init({
      currentLocale: lang,// TODO: determine locale here
      locales: {
        [lang]: currentLocale
      }
    }).then(() => {
      // After loading CLDR locale data, start to render
    })
  }

  render() {
    const antd_locale = getCookie('lang').replace("-", "_");
    const locale = antd_locales[antd_locale];
    return (
      < div className='app' >
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
      </div >
    );
  }
}

export default App;
