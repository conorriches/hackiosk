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
          <StatementItem name={item.name} price={item.price} key={i} />
        ))}
        <hr />
        <StatementItem name="Total" price={sum(this.props.items)} />
      </div>
    );
  }
}

const sum = items => {
  items.map(i => {
    //console.log(i);
  });
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
