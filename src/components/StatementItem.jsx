import React from "react";
import NumericLabel from "react-pretty-numbers";

class StatementItem extends React.Component {
  render() {
    return (
      <li>
        <div className="row">
          <div className="col-md-8">{this.props.name}</div>
          <div className="col-md-4">
            <NumericLabel
              params={{
                currency: true,
                currencyIndicator: "GBP",
                precision: 2
              }}
            >
              {this.props.price}
            </NumericLabel>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <small>{this.props.barcode}</small>
          </div>
        </div>
      </li>
    );
  }
}

export default StatementItem;
