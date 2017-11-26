import React from "react";
import { members } from "../config.js";
import Member from "./Member";
import classnames from "classnames";
import { Link } from "react-router-dom";

class MemberList extends React.Component {
  render() {
    return (
      <div>
        <div className="row category">
          {members.map((item, i) => {
            var filterActive = typeof this.props.activeOnly != "undefined";
            var logic = (filterActive && !item.frozen) || !filterActive;

            return logic ? (
              <div className="col-md-3" key={i}>
                <div
                  className={classnames(
                    "member",
                    "card",
                    this.props.frozen ? "frozen" : ""
                  )}
                  onClick={() => {
                    this.props.clickEvent && this.props.clickEvent(item.id);
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
          })}
        </div>
      </div>
    );
  }
}

export default MemberList;
