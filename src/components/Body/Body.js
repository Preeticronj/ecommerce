import React from "react";
import Brand from "../Brand";
import Price from "../Price";
import Change_Layout from "../Change_Layout";
import Phone from "../Phone/Phone";
import { ProductList } from "../ProductList";
import "./Body.css";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pagination.css";
import { filterItem } from "../../Action/index1";
import { connect } from "react-redux";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      tempArr: []
    };
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      tempArr: this.paginate(nextprops.new_arr, 12, this.state.activePage)
    });
  }

  componentDidMount() {
    this.props.dispatch(filterItem(ProductList));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber,
      tempArr: this.paginate(this.props.new_arr, 12, pageNumber)
    });
  }

  paginate(array, page_size, page_Number) {
    return array.slice((page_Number - 1) * page_size, page_Number * page_size);
  }

  render() {
    return (
      <div className="outer-div">
        <div className="left-div">
          <div className="body1">
            <Brand />
          </div>
          <div className="body2">
            <Price />
          </div>
        </div>
        <div className="right-div">
          <div className="body3">
            <Change_Layout />
          </div>
          <div className="body4">
            {this.state.tempArr && this.state.tempArr.length > 0
              ? this.state.tempArr.map((item, index) => {
                  return (
                    <Phone
                      key={index}
                      image={item.image_url}
                      Name={item.name}
                      id={item.id}
                      price={item.price}
                      description={item.Description}
                      Brand={item.Brand}
                      Size={item.Size}
                    />
                  );
                })
              : null}
          </div>
          <div className="Pagination">
            <a href="#" />
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={12}
              totalItemsCount={this.props.count}
              pageRangeDisplayed={2}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    new_arr: state.filter_arr,
    count: state.filter_arr.length,
    resultant_arr: state.result_arr
  };
}

export default connect(mapStateToProps)(Body);
