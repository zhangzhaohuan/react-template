import React, { Component } from 'react'
import intl from 'react-intl-universal';

import { Button } from 'antd';
class BasicComponent extends Component {
  render() {
    return (
      <div>
        <Button>{intl.get('SIMPLE')}</Button>
        {/* <div className="title">Basic Examples:</div> */}
        <div>{intl.get('SIMPLE')}</div>
        <div>{intl.get('HELLO', { name: 'Tony', where: 'Alibaba' })}</div>
      </div>
    )
  }
}

export default BasicComponent;