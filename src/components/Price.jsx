import React from "react";
import "./Price.css";
import SubPrice from "./SubPrice/SubPrice";
import { filterPrice } from "../Action/index1";
import { connect } from "react-redux";

export class Price extends React.Component {
  constructor() {
    super();
    this.state = {
      name: " ",
    arr1:["low to high","high to low"],
    result1: []
    };
  }
  
  handleCheck = (event, name) => {
    const tempName = name;
    let filPrice;
    console.log(" this.state.result1===>>>", this.state.result1);
    if (!event.target.checked) {
      filPrice = this.state.result1.splice(this.state.result1.indexOf(tempName), 0);
    } else {
      filPrice = this.state.result1.concat(tempName);
    }
    this.setState({
      result1: filPrice,
      name: tempName
    });
    console.log("filPrice===>>>", filPrice);
    this.props.dispatch(filterPrice(name));
  };
  
  render() {
    return (
      <div className="price">
        <div className="source1">
          <h1>Price</h1>
        </div>
        {this.state.arr1.map((item, index) => {
          return (
            <div>
              <p key={index}>
                <SubPrice text={item} fun1={this.handleCheck} />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    resultant_arr: state.filter_arr
  };
}
export default connect(mapStateToProps)(Price);
