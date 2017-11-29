import React from "react";
import MemberList from "../components/MemberList";
import Info from '../components/Info'
import { connect } from "react-redux";

class Members extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Info>Search Members:</Info>
            <MemberList match={this.props.match} />
          </div>
        </div>
      </div>
    );
  }

  getMemberId() {
    return typeof this.props.match.params.member == "undefined"
      ? 0
      : this.props.match.params.member;
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return { items: state.statement, snackspace: state.snackspace };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
