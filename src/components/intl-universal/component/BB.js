import React, { Component } from 'react'
import intl from 'react-intl-universal';

import { Button } from 'antd';
class BB extends Component {
  render() {
    return (
      <div>
        <Button>{intl.get('lang_CN')}</Button>
        
      </div>
    )
  }
}

export default BB;