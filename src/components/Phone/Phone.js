import React from "react";
import "./Phone.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Phone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("id-->", this.props.Count);
    return (
      <div className="phones">
        <div>
          <img alt="phone " width="80%" height="90%" src={this.props.image} />
        </div>
        <div>
          <Link
            to={{
              pathname: "/Detail",
              state: {
                Name: this.props.Name,
                price: this.props.price,
                description: this.props.description,
                url: this.props.image,
                Brand: this.props.Brand,
                id: this.props.id
              }
            }}
          >
          {this.props.Name}
          </Link>
          <h2>{this.props.price}</h2>
          <p>{this.props.description}</p>
          <button type="button" value="Submit">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}
export default Phone;
