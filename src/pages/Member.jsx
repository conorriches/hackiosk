import React from "react";
import { connect } from "react-redux";
import { members } from "../config";
import Info from "../components/Info";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import NumericLabel from "react-pretty-numbers";
import classnames from "classnames";

class Member extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.getMember() ? (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1
                  className={classnames(
                    "info",
                    this.getMember().frozen ? "error" : ""
                  )}
                >
                  {this.getMember().name}{" "}
                  {this.getMember().frozen ? "(frozen)" : ""}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 balance">
                <h3
                  className={classnames(
                    this.getMember().balance < 0 ? "negative" : "positive"
                  )}
                >
                  <NumericLabel
                    params={{
                      currency: true,
                      justification: "L",
                      currencyIndicator: "GBP",
                      precision: 2
                    }}
                  >
                    {this.getMember().balance}
                  </NumericLabel>
                </h3>

                {this.getMember().balance < 0 && <p className="info error">
                  <b>You have a negative balance.</b><br/> Please support your space by
                  topping up when you can.
                </p>}

              </div>
              <div className="col-md-6">
                {this.getMember().frozen ? (
                  <div>
                    <h3 class="info error">
                      This account is frozen. You cannot top up or withdraw from
                      this account at this time.
                    </h3>
                    <h4 class="info">Sorry about that.</h4>
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className={classnames(
                        "btn btn-primary btn-lg btn-block",
                        this.getMember().frozen ? "disabled" : ""
                      )}
                    >
                      Top Up
                    </button>

                    <button
                      type="button"
                      className={classnames(
                        "btn btn-secondary btn-lg btn-block",
                        this.getMember().frozen ? "disabled" : "",
                        this.getMember().balance <= 0 ? "disabled" : ""
                      )}
                    >
                      Withdraw
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <Error>
          <h1>Member not found</h1>
        </Error>
        <Link to="/members">
          <h3>Go back to member list</h3>
        </Link>
      </div>
    );
  }

  getMember = () => {
    let member = false;
    members.map(m => {
      if (m.id == this.props.match.params.member) member = m;
    });
    return member;
  };
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return { items: state.statement, snackspace: state.snackspace };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
