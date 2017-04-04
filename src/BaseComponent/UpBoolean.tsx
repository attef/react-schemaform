﻿import * as React from "react";
import {UpFormControl} from "../UpForm/UpFormControl"
import UpSwitch from "../externalReactComponent/UpSwitch"

export default class UpBoolean extends UpFormControl<Boolean>{
    constructor(p, c) {
    }
        this.setState({
            value: this.props.schema.default
        });
    }
        return <UpSwitch isNuallble={this.isNuallble} onChange={this.handleChangeEventGlobal} default={true} ></UpSwitch>        
    }
    
        return false;
    }

    handleChangeJsEvent(event : boolean) {
        return event;
    }

    handleChangeData(args: boolean) {
        return {
            hasError: false,
            errorMessage: null,
            correctValue: args
        };
    }

}