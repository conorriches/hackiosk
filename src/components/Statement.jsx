import React from "react";
import { connect } from "react-redux";
import StatementItem from "./StatementItem";
import { addItem } from "../actions";

class Statement extends React.Component {
  render() {
    return (
      <div className="statement">
        <div className="info">Your Basket:</div>
        {this.props.items.map((item, i) => (
          <StatementItem name={item.name} price={item.price} barcode={item.barcode} key={i} />
        ))}
        <hr />
        <StatementItem name="Total" price={sum(this.props.items)} />
        
          <button type="button" className="btn btn-danger">
            Clear
          </button>
          <button type="button" className="btn btn-success pull-right">
            Buy
          </button>
      
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
const mapStateToProps = (state, ownProps) => ({
  // You can now say this.props.books
  items: state.statement
});

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    // You can now say this.props.createBook
    createBook: item => dispatch(addItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
