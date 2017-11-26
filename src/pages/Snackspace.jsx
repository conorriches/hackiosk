import React from "react";
import { connect } from "react-redux";
import ItemList from "../components/ItemList";
import Statement from "../components/Statement";
import Info from "../components/Info";
import MemberList from "../components/MemberList";

class Snackspace extends React.Component {

  render() {
    return (
      <div >
        <div className="row">
          <div className="col-md-3">
            <Statement items={[]} />
          </div>
          <div className="col-md-9">
              <ItemList
                category={this.props.category}
                match={this.props.match}
              />
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    let { redirect } = this.props.snackspace;

    if (redirect == true) {
      console.log("Redirect to snackspace");
    }
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return { items: state.statement, snackspace: state.snackspace };
};

// Maps actions to props
const mapDispatchToProps = dispatch => {
  return {
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackspace);
