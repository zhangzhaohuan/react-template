import React, { Component } from 'react';
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { setCookie, getCookie } from 'common/cookie.js'
import { MyLoadingComponent } from "./components/common/MyLoadingComponent";

// antd国际化配置
import { LocaleProvider } from 'antd';


// react-intl-universal国际化配置
import intl from 'react-intl-universal';
import IntlPolyfill from "intl";

// css module scc test
import styles from './style/demo.module.scss';

//antd国际化文件
const antd_locales = {
  "zh_CN": require("antd/lib/locale-provider/zh_CN"),
  "en_US": require("antd/lib/locale-provider/en_US")
}

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
// import asyncComponent from 'common/asyncComponent';
// const Home = asyncComponent(() => import('./components/home'));
// const Login = asyncComponent(() => import('./components/login'));
// const Register = asyncComponent(() => import('./components/register'));

const Home = Loadable({
  loader: () => import("./components/home"),
  loading: MyLoadingComponent
});
const Login = Loadable({
  loader: () => import("./components/login"),
  loading: MyLoadingComponent
});
const Register = Loadable({
  loader: () => import("./components/register"),
  loading: MyLoadingComponent
});
const Antd = Loadable({
  loader: () => import("./components/antd"),
  loading: MyLoadingComponent
});



class App extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    let lang;
    if (!getCookie('lang')) {
      lang = window.navigator.language;
    } else {
      lang = getCookie('lang');
    }
    switch (lang) {
      case 'zh-CN':
      case 'zh': lang = 'zh-CN'; break;
      case 'en-US': lang = 'en-US'; break;
      case 'ko-KR': lang = 'ko-KR'; break;
      case 'ja': lang = 'ja-JP'; break;
      default: lang = 'en-US'; break;
    }

    setCookie('lang', lang, 7);
    this.loadLocales();
  }

  loadLocales = () => {
    const lang = getCookie('lang');
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
              <div>
                <ul>
                  <li><Link to='/login'>login</Link></li>
                  <li><Link to='/register'>register</Link></li>
                  <li><Link to='/antd'>antd</Link></li>
                  <li><Link to='/'>home</Link></li>
                </ul>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/antd" component={Antd} />
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </Router>
          </div>
          <div className={styles.name}>
            <div>
              <div className={styles.age}>
                css module
            </div>
            </div>
          </div>
          <div className='name'>css2 module </div>

        </LocaleProvider>
      </div >
    );
  }
}

export default App;
