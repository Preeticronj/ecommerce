import React from "react";
import "./layout.css";
export class Change_Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="layout">
          <p>change layout</p>
          <div className="i1">
            <div className="i2" />
            <div className="i2" />
            <div className="i2" />
          </div>
          <div className="i3">
            <div className="i4" />
            <div className="i4" />
            <div className="i4" />
            <div className="i4" />
          </div>
        </div>
      </div>
    );
  }
}
export default Change_Layout;
