import React from "react";
import { connect } from "react-redux";
import StatementItem from "./StatementItem";
import { clearBasket, startCheckout } from "../actions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Statement extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.startCheckout = this.startCheckout.bind(this);
  }

  handleClearClick(e) {
    this.props.clearBasket();
    this.props.history.push("/snackspace");
  }

  startCheckout(e) {
    this.props.startCheckout(sum(this.props.items));
  }

  render() {
    return (
      <div className="statement">
        <div className="info">Your Basket:</div>
        {this.props.items.map((item, i) => (
          <StatementItem
            name={item.name}
            price={item.price}
            barcode={item.barcode}
            key={i}
          />
        ))}
        <hr />
        <StatementItem name="Total" price={sum(this.props.items)} />

        {this.props.checkout ? (
          <Link to="/snackspace" className="btn btn-dark btn-block pull-right">
            Go back
          </Link>
        ) : (
          <div>
            <Link to="/snackspace/checkout">
              <button
                type="button"
                onClick={this.startCheckout}
                className="btn btn-success btn-block pull-right"
              >
                Buy
              </button>
            </Link>
            <button
              type="button"
              onClick={this.handleClearClick}
              className="btn btn-outline-danger btn-block"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }
}

const sum = items => {
  let total = 0;
  items.map(i => {
    total += i.price;
  });
  return total;
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return { items: state.statement, snackspace: state.snackspace };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    clearBasket: () => dispatch(clearBasket()),
    startCheckout: total => dispatch(startCheckout(total))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Statement)
);
