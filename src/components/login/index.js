import React, { Component } from 'react';
import Intluniversal from '../intl-universal';
import BB from '../intl-universal/component/BB';
import { Input } from 'antd';
import './login.scss';
export default class Login extends Component {
  render() {
    return (
      <div>
        <Input placeholder="输入用户名" />
        <Input placeholder="输入密码" />
        <Intluniversal />
        <BB />
      </div>
    )
  }
}
