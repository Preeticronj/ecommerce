import React from "react";
export class Sub_Brand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={event => {
            this.props.fun(event, this.props.text);
          }}
        />
        {this.props.text}
      </div>
    );
  }
}
export default Sub_Brand;
