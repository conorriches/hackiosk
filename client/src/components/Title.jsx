import React from "react";
import { menuItems } from "../config";
import ScannerInput from './ScannerInput';


class Title extends React.Component {
  render() {
    return (
      <div className="jumbotron title">
        <h3>
          {menuItems.map(
            item =>
              item.url === `/${this.props.location.pathname.split("/")[1]}`
                ? `> ${item.name}`
                : ""
          )}
        </h3>

        <ScannerInput/>
      </div>
    );
  }
}

export default Title;
