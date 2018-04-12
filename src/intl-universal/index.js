import React, { Component } from "react";
import BasicComponent from "./component/Basic";
import PluralComponent from "./component/Plural";
import HtmlComponent from "./component/Html";
import DateComponent from "./component/Date";
import CurrencyComponent from "./component/Currency";
import MessageNotInComponent from "./component/MessageNotInComponent";

export default class Intl extends Component {
  render() {
    return (
      <div>
        <BasicComponent />
        <PluralComponent />
        <HtmlComponent />
        <DateComponent />
        <CurrencyComponent />
        <MessageNotInComponent />
      </div>
    )
  }
}
