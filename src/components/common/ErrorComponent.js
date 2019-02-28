import React, { Component } from "react";

export default class ErrorComponent extends Component {
  componentDidMount() {
    window.location.reload();
  }
  render() {
    return <div />;
  }
}
