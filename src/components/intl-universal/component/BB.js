import React, { Component } from 'react'
import intl from 'react-intl-universal';

import { Button } from 'antd';
class BB extends Component {
  render() {
    return (
      <div>
        <Button>{intl.get('lang_CN')}</Button>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default BB;