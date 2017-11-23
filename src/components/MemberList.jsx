import React from "react";
import { members } from "../config.js";
import Member from "./Member";

class MemberList extends React.Component {
  render() {
    return (
      <div>
        <div className="row category">
          {console.log(this.props.match.params.member)}
          {members.map((item, i) => {
            
            return (
              <Member
                id={item.id}
                name={item.name}
                balance={item.balance}
                frozen={item.frozen}
                key={i}
              />
            );
            return "";
          })}
        </div>
      </div>
    );
  }
}

export default MemberList;
