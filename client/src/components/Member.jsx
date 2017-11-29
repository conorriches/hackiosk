import React from "react";
import { connect } from "react-redux";

import NumericLabel from "react-pretty-numbers";
import classnames from "classnames";

class Member extends React.Component {
  render() {
    return (
      <div className="card-body fadeIn">
        <h4 className="card-title">{this.props.name}</h4>
        <span
          className={classnames(
            "badge",
            "item-price",
            "badge-default",
            this.props.balance > 0 ? "badge-success" : "",
            this.props.balance < 0 ? "badge-warning" : ""
          )}
        >
          <NumericLabel
            params={{
              currency: true,
              currencyIndicator: "GBP",
              precision: 2
            }}
          >
            {this.props.balance}
          </NumericLabel>
        </span>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
