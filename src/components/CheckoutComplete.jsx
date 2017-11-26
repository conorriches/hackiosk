import React from "react";
import { connect } from "react-redux";
import NumericLabel from "react-pretty-numbers";
import { Link } from "react-router-dom";
import { clearBasket } from "../actions";
import ItemList from "../components/ItemList";
import Statement from "../components/Statement";
import Info from "../components/Info";
import MemberList from "../components/MemberList";
import { members } from "../config.js";
import classnames from "classnames";
import { withRouter } from "react-router";

class Snackspace extends React.Component {
  constructor(props) {
    super(props);
    let timer = setTimeout(() => {
      this.props.history.push("/snackspace");
    }, 5000);

    this.setState({ timer });
  }

  updateTotal() {
    let total = 0;
    this.props.items.map(item => {
      total += item.price;
    });
    this.setState({ total });
  }

  componentDidMount() {
    this.updateTotal();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    return (
      <div className="fadeIn">
        <hr />
        <h2>Purchase Complete</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>
              {this.props.username} {" spent "}
              <NumericLabel
                params={{
                  currency: true,
                  justification: "L",
                  currencyIndicator: "GBP",
                  precision: 2
                }}
              >
                {this.props.total}
              </NumericLabel>
            </h3>
          </div>
          <div className="col-md-6">
            <h3>
              New Balance:{" "}
              <NumericLabel
                params={{
                  currency: true,
                  justification: "L",
                  currencyIndicator: "GBP",
                  precision: 2
                }}
              >
                {this.props.balance}
              </NumericLabel>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Link to="/snackspace">
              <div className="timer">
                <div className="mask" />
              </div>​
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { items: state.statement, snackspace: state.snackspace };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
    clearBasket: () => dispatch(clearBasket())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Snackspace)) ;
