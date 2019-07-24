﻿import * as $ from "jquery";
import * as React from "react";

import { UpLabel, UpBox, UpGrid, UpCol, UpRow } from "@up-group/react-controls";

export interface UpFormGroupProps {
  hasError?: boolean;
  title: string;
  description: string;
  isRequired: boolean;
}

export default class UpFormGroup extends React.Component<UpFormGroupProps, {}> {
  constructor(p, c) {
    super(p, c);
  }
  
  render() {
    return (
      <div>
        <UpLabel text={this.props.title}>
          {this.props.description != null ? (
            <a
              data-toggle="tooltip"
              data-placement="bottom"
              data-html="true"
              title={this.props.description}
            >
              <i className="glyphicon glyphicon-info-sign" />
            </a>
          ) : null}

          <span style={{ color: "red" }}>
            {this.props.isRequired ? " *" : ""}
          </span>
        </UpLabel>
        {this.props.children}
      </div>
    );
  }

  onerror = () => {
    console.log("error change");
  };
}
