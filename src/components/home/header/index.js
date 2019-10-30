import React, { Component,PureComponent } from 'react'
import { LocaleProvider, Layout, Menu, Icon, Select, Pagination, Button } from 'antd';

import { observer, inject } from 'mobx-react'
import { setCookie, getCookie } from 'common/cookie.js'

const Option = Select.Option;

class Father extends PureComponent {
  render() {
    return (
      <div>
        {this.props.obj.name}
      </div>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.defaultLan = '',
      this.state = {
        obj: {
          name: '123'
        }
      }
  }
  changeLanguage = (e) => {
    setCookie('lang', e);
    window.location.reload();
  }

  UNSAFE_componentWillMount() {
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
          <Option value="zh-CN">中文</Option>
          <Option value="en-US">english</Option>
        </Select>
        <Button onClick={this.login} >登陆</Button>
        <Button onClick={()=>{
          const obj = this.state.obj;
          obj.name = '456;'
          this.setState({obj})
        }} >gaibian</Button>

        <Father obj={this.state.obj} />
      </div>
    )
  }
}
