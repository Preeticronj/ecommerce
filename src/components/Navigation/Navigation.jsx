import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import "./Logo.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav">
        <div className="ecomm">
          <p><Link to="/"> Ecommerce</Link></p>
        </div>
        <div className="cart1">
          <Link
            to={{
              pathname: "/Cart",
              state: {
                Name: this.props.Name,
                price: this.props.price,
                description: this.props.description,
                url: this.props.image,
                Brand: this.props.Brand,
                Size: this.props.Size
              }
            }}
          >
            <p>
              cart(<span>{this.props.count}</span>)
            </p>
          </Link>
          </div>
        <Logo />
      </div>
    );
  }
}

const mapStateToProps=(state)=> {
  return {
    count: state.cart_arr.length
  };
}
export default connect(mapStateToProps)(Navigation);
