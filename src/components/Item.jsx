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
    this.props.addItem(this.props.barcode);
  }

  render() {
    return (
      <div className="col-md-3" >
        <div className="tile card" onClick={this.handleClick}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <span className="badge badge-success item-price">
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
    addItem: (barcode) => dispatch(addItem(barcode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
