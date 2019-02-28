import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default class Demo extends Component {
  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }

  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  }
  handleChangeName = () => {
    console.log();
  }


  validateName = (rule, value, callback) => {
    console.log(rule);
    console.log(value);
    const { getFileValue } = this.props.form;
    if(value===getFileValue('nickname')){
      callback('name和nickname相同');
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('username', {
            // getValueFromEvent: function () { },
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
              {
                validator: this.validateName,
                message: 'Please input your name',
              }
            ],
          })(
            <Input placeholder="Please input your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Nickname">
          {getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],
          })(
            <Input placeholder="Please input your nickname" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox
            checked={this.state.checkNick}
            onChange={this.handleChange}
          >
            Nickname is required
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </div>
    )
  }
}
