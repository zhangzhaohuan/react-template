import React, { Component } from 'react'
import { LocaleProvider, Layout, Menu, Icon, Select, Pagination } from 'antd';
import { observer, inject } from 'mobx-react'
import Test from '../test'
import Top from './header'
import Intluniversal from '../intl-universal'

const { Footer, Sider, Content, Header } = Layout;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Top history={this.props.history} />
          </Header>
          <Content>
            <Test />
            <Intluniversal />
            <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    )
  }
}
