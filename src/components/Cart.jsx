import React from "react";
import "../Cart.css";
import { connect } from "react-redux";
import { increment, decrement, deleteItem } from "../Action/index1";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0 };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.flags) this.calculateTotal(nextProps);
  };
  componentDidMount = () => {
    this.calculateTotal();
  };
  calculateTotal = () => {
    let totalPrice = 0;
    this.props.item.forEach(items => {
      const amt = parseFloat(items.price.replace(/,/g, "")) * items.count;
      totalPrice += amt;
    });
    this.setState({
      totalPrice
    });
  };

  render() {
    if (!this.props.item && !this.props.item.length > 0)
      return <p>loading....</p>;
    return (
      <div>
        <div className="shipping">
          <h1>shippingCart</h1>
        </div>
        <div className="cart">
          {this.props.item.map(items => {
            return (
              <div>
                <div className="image1">
                  <img
                    width="80 px"
                    heigth="90px"
                    src={items.url}
                    alt="phones"
                  />
                </div>
                <div>
                  <h2>{items.name}</h2>
                  <p>{items.description}</p>
                  <h3>{items.price}x</h3>
                  <h3>{items.count}</h3>
                </div>
                <button onClick={() => this.props.dispatch(increment(items))}>
                  +
                </button>
                <button onClick={() => this.props.dispatch(decrement(items))}>
                  -
                </button>
                <button
                  onClick={() => {
                    this.props.dispatch(deleteItem(items));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {this.props.item.length !== 0 ? (
          <div className="p1">
            <h3>TotalPrice:</h3>
            <div>{this.state.totalPrice}</div>
          </div>
        ) : (
          <div>
            <p>there is no item in cart</p>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    item: state.cart_arr,
    flags: state.flag
  };
}

export default connect(mapStateToProps)(Cart);
