import React, { Component } from 'react'
import { LocaleProvider, Layout, Menu, Icon, Select, Pagination, Button } from 'antd';

import { observer, inject } from 'mobx-react'
import { setCookie, getCookie } from 'common/cookie.js'

const Option = Select.Option;

@inject('intl')
@observer
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.defaultLan = ''
  }
  changeLanguage = (e) => {
    setCookie('lang', e);
    window.location.reload();
  }

  componentWillMount() {
    if (!getCookie('lang')) {
      let lang = window.navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    this.defaultLan = getCookie('lang');
  }

  login = () => {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return (
      <div>
        <Select defaultValue={this.defaultLan} style={{ width: 120 }} onChange={this.changeLanguage}>
          {/* <Option value="zh_CN">{intl.get('lang_CN')}</Option>
                    <Option value="en_US">{intl.get('lang_US')}</Option> */}
          <Option value="zh-CN">中文</Option>
          <Option value="en-US">english</Option>
        </Select>
        <Button onClick={this.login} >登陆</Button>

      </div>
    )
  }
}
