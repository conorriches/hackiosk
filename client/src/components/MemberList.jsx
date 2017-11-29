import React from "react";
import Member from "./Member";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Error from "./Error";

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ members: data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div>
        <div className="row category">
          {this.state.error && (
            <div className="col-md-12">
              <Error>
                <h1>Error!</h1>
                <h2>There was an error fetching the data</h2>
              </Error>
            </div>
          )}
          {this.state.members ? (
            this.state.members.map((item, i) => {
              var filterActive = typeof this.props.activeOnly != "undefined";
              var logic = (filterActive && !item.frozen) || !filterActive;

              return logic ? (
                <div className="col-md-3" key={i}>
                  <div
                    className={classnames(
                      "member",
                      "card",
                      item.frozen ? "frozen" : ""
                    )}
                    onClick={() => {
                      this.props.clickEvent && this.props.clickEvent(item);
                    }}
                  >
                    {this.props.clickEvent ? (
                      <Member
                        id={item.id}
                        name={item.name}
                        balance={item.balance}
                        frozen={item.frozen}
                        key={i}
                      />
                    ) : (
                      <Link to={"/members/member/" + item.id}>
                        <Member
                          id={item.id}
                          name={item.name}
                          balance={item.balance}
                          frozen={item.frozen}
                          key={i}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              ) : null;
              return "";
            })
          ) : (
            <div className="col-md-12">Loading Data...</div>
          )}
        </div>
      </div>
    );
  }
}

export default MemberList;
