import React from "react";
import { snackspace } from "../config";
import Tile from "../components/Tile";
import Info from "../components/Info";

class Snackspace extends React.Component {
  render() {
    return (
      <div>
        <Info>Categories:{this.props.category}</Info>
        <div className="row">
          <Tile title="ALL" link={`/snackspace`} />

          {[
            ...new Set(snackspace.products.map(item => item.category))
          ].map(item => (
            <Tile title={item} link={`/snackspace/category/${item}`} />
          ))}
        </div>

        <Info>Items:</Info>
        <div className="row">
          {snackspace.products.map(item => {
            if (
              this.props.match.params.category === item.category ||
              typeof this.props.match.params.category === "undefined"
            )
              return (
                <Tile title={item.name} link="/labels/dnh">
                  <span class="badge badge-success">£{item.price}</span>
                </Tile>
              );
              return '';
          })}
        </div>
      </div>
    );
  }
}

export default Snackspace;
