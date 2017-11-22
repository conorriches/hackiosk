import React from "react";
import Tile from "../components/Tile";

class Snackspace extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <Tile link="/" title="Do Not Hack"/>
          </div>
          <div className="col-md-3">
          </div>
        </div>
     
      </div>
    );
  }
}

export default Snackspace;
