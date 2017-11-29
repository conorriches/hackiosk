import React from "react";
import { connect } from "react-redux";
import NumericLabel from "react-pretty-numbers";
import { Link } from "react-router-dom";
import { clearBasket } from "../actions";
import ItemList from "../components/ItemList";
import Statement from "../components/Statement";
import Info from "../components/Info";
import MemberList from "../components/MemberList";
import classnames from "classnames";

import CheckoutComplete from "../components/CheckoutComplete";

class Snackspace extends React.Component {
  constructor(props) {
    super(props);
    this.chooseAccount = this.chooseAccount.bind(this);

    this.state = { total: 0, acct: false };
    let halt = 0;
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

  chooseAccount(member) {
    fetch(`/balances/user/${member.id}/transaction`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: this.state.total
      })
    })
      .then(res => {
        return res.ok ? res.json() : false;
      })
      .then(data => {
        console.log("Got data");
        console.log(data);
        if (data) {
          this.setState({ acct: data });
        } else {
          this.setState({ error: true });
        }
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          {!this.state.accountId && (
            <div className="col-md-3">
              <Statement items={[]} checkout />
            </div>
          )}

          <div
            className={classnames(
              this.state.accountId ? "col-md-12" : "col-md-9"
            )}
          >
            {!this.state.error ? (
              <div>
                <Info>
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Checkout</h3>
                      {this.state.acct ? (
                        <CheckoutComplete
                          username={this.state.acct.name}
                          balance={this.state.acct.balance}
                          total={this.state.total}
                        />
                      ) : (
                        <h4>
                          Choose the account to deduct {" "}
                          <NumericLabel
                            params={{
                              currency: true,
                              justification: "L",
                              currencyIndicator: "GBP",
                              precision: 2
                            }}
                          >
                            {this.state.total}
                          </NumericLabel>{" "}
                          from
                        </h4>
                      )}
                    </div>
                  </div>
                </Info>
                {!this.state.acct && (
                  <MemberList activeOnly clickEvent={this.chooseAccount} />
                )}
              </div>
            ) : (
              <h1>Something went wrong - transaction cancelled.</h1>
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Snackspace);
