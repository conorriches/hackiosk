import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";
import { withRouter } from "react-router";

class ScannerInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  componentDidMount(){
    this.focus();
  }
  handleKeyPress = event => {
    this.focus();
    if (event.key == "Enter") {
      event.preventDefault();
      this.props.addItem(event.target.value);
      event.target.value = "";
      this.props.history.push("/snackspace");
    }
  };

  onBlur = e =>{
    this.focus();  
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <div className="scanner" onClick={this.handleClick}>
        Scanner Input: <input
          type="text"
          id="scannerInput"
          ref={input => {
            this.textInput = input;
          }}
          onBlur={this.onBlur}
          onKeyPress={this.handleKeyPress}
        />
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
    addItem: barcode => dispatch(addItem(barcode))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScannerInput));
