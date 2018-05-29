import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { test } from 'common/axios/axios.js'

@inject('test')
@observer
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.test = this.props.test;
    }

    async componentDidMount() {
        const data = await test();
        this.test.data = data.data;
        // console.log(data);
    }
    render() {
        const { data } = this.test;
        return (
            <div>
                <ul className="todo-list">
                    <span>{this.test.getDataLength}</span>
                    <p>{this.test.getlength.get()}</p>
                </ul>
            </div>
        )
    }
}