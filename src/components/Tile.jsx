import React from 'react';
import {Link} from 'react-router-dom'

class Tile extends React.Component {
  render() {
    return (
    <div className="col-md-3 tile">
      <Link to={this.props.link}>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{this.props.title}</h4>
          {this.props.children}
        </div>
      </div>
      </Link>
    </div>
    );
  }
};

export default Tile;