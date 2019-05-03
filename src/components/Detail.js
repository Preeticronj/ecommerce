import React from "react";
import "./Detail.css";
import { add_to_Cart } from "../Action/index1";
import { connect } from "react-redux";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  render() {
    console.log(this.props, "details js");
    return (
      <div className="inner-detail">
        <div className="inner-div">
          <img
            src={this.props.location.state.url}
            alt="phone"
            width="70%"
            height="150%"
          />
        </div>
        <div className="phonedetail">
          <label>
            <h3>{this.props.location.state.Name}</h3>
            <br />
            <h3>Price</h3>
          </label>
          {this.props.location.state.price}
          <br />
          <h3>description</h3>
          {this.props.location.state.description}
          <br />
          <h3>Brand</h3>
          {this.props.location.state.Brand}
          <br />
          <h3>ID</h3>
          {this.props.location.state.id}
          <br />
          <div />
          <button onClick={() => this.props.addCart(this.props.location.state)}>
            ADD To CART
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCart: item => {
      dispatch(add_to_Cart(item));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
