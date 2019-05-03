import React from "react";
import "./Price.css";

export class Price extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: "false"
    };
  }
  handleCheck = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <div className="price">
        <div className="source1">
          <h1>Price</h1>
        </div>
        <label>
          <input type="radio" value="Low to High" onChange={this.handleCheck} />
          Low to High
        </label>
        <br />
        <label>
          <input type="radio" value="High to Low" onChange={this.handleCheck} />
          High to Low
        </label>
      </div>
    );
  }
}
export default Price;
