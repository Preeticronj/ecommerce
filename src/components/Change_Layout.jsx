import React from "react";
import "./layout.css";
export class Change_Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     flag:true
    }
  }

  render() {
    return (
      <div>
        <div className="layout">
          <p>change layout</p>
          <div className={this.props.valid ? "i1 active" : "i1"} onClick={()=>{this.props.func(this.state.flag)}}>
            <div className="i2" />
            <div className="i2" />
            <div className="i2" />
          </div>
      
          <div className={!this.props.valid ? "i3 active" : "i3"} onClick={()=>{this.props.func(!this.state.flag)}}>
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
