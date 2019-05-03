import React from "react";
import "./Brand.css";
import Sub_Brand from "./sub_brand/Sub_Brand";
import { filterProduct } from "../Action/index1";
import { connect } from "react-redux";

export class Brand extends React.Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      arr: ["Apple", "Huwaei", "Meizu", "Samsung", "Vestel", "Xioami", "Asus"],
      result: []
    };
  }
  handleCheck = (event, name) => {
    const tempName = name;
    let filarr;
    console.log(" this.state.result===>>>", this.state.result);
    if (!event.target.checked) {
      filarr = this.state.result.splice(this.state.result.indexOf(tempName), 0);
    } else {
      filarr = this.state.result.concat(tempName);
    }
    this.setState({
      result: filarr,
      name: tempName
    });
    console.log("filarr===>>>", filarr);
    this.props.dispatch(filterProduct(filarr));
  };

  render() {
    return (
      <div>
        <div>
          <div className="brand">
            <h1>Brand</h1>
          </div>
        </div>
        {this.state.arr.map((item, index) => {
          return (
            <div>
              <p key={index}>
                <Sub_Brand text={item} fun={this.handleCheck} />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    resultant_arr: state.result_arr
  };
}
export default connect(mapStateToProps)(Brand);
