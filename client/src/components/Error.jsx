import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <div className="info error">
            {this.props.children}
        </div>
        </div>
      </div>
    );
  }
};

export default Error;
