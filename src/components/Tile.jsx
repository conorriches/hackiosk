import React from 'react';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

class Tile extends React.Component {
  render() {
    return (
    <div className={classnames("col-md-3", "tile", this.props.active?"active":"")}>
      <Link to={this.props.link}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          {this.props.children}
        </div>
      </div>
      </Link>
    </div>
    );
  }
};

export default Tile;