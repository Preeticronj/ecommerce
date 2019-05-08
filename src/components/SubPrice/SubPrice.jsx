import React from "react";
export class SubPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={event => {
            this.props.fun1(event, this.props.text)
          }}
        />
        {this.props.text}
      </div>
    );
  }
}
export default SubPrice;
