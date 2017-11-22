import React from "react";
import ItemList from "../components/ItemList";
import Statement from "../components/Statement";
import ScannerInput from "../components/ScannerInput";

class Snackspace extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <ItemList category={this.props.category} match={this.props.match} />
          </div>
          <div className="col-md-3">
            <Statement items={[]} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ScannerInput/>
          </div>
        </div>
      </div>
    );
  }
}

export default Snackspace;
