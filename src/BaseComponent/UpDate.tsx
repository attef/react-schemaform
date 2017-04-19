﻿import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { UpFormControl } from "../UpForm/UpFormControl";
import { TypeDateControl, dateFormat } from "../ControlError/TypeDateControl";
import { UpDate } from "@up-group/react-controls";

export default class UpDateComp extends UpFormControl<Date> {

    inputElementGroup: HTMLDivElement;
    constructor(p, c) {
        super(p, c);
    }

    setInput(data) {
    }

    _componentDidMount() {
    }

    renderField() {

        return <UpDate value={this.state.value} onChange={this.handleChangeEventGlobal} hasError={this.state.hasError} isNullable={this.isNullable}></UpDate>

      

    }

    handleChangeJsEvent(event: Date) {
        return event;
    }


    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }


}

