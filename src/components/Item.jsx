import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import NumericLabel from "react-pretty-numbers";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.props);
    this.props.addItem(this.props.title, this.props.price);
  }

  render() {
    return (
      <div className="col-md-3 tile" onClick={this.handleClick}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <span className="badge badge-success">
              <NumericLabel
                params={{
                  currency: true,
                  currencyIndicator: "GBP",
                  precision: 2
                }}
              >
                {this.props.price}
              </NumericLabel>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    statement: state.statement
  };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    // You can now say this.props.createBook
    addItem: (name, price) => dispatch(addItem(name, price))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
