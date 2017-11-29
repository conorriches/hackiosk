import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <div className="info">
            {this.props.children}
        </div>
        </div>
      </div>
    );
  }
};

export default Info;
