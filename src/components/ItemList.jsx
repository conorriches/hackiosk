import React from "react";
import { snackspace } from "../config.js";
import Tile from "./Tile";
import Item from "./Item";
import Info from "./Info";


class ItemList extends React.Component {
  render() {
    return (
      <div>
        <Info>Categories:{this.props.category}</Info>
        <div className="row">
          <Tile title="ALL" link={`/snackspace`} />

          {[
            ...new Set(snackspace.products.map((item, i) => item.category))
          ].map((item, i) => (
            <Tile title={item} link={`/snackspace/category/${item}`} key={i} />
          ))}
        </div>

        <Info>Items:</Info>
        <div className="row">
          {snackspace.products.map((item, i) => {
            if (
              this.props.match.params.category === item.category ||
              typeof this.props.match.params.category === "undefined"
            )
              return (
                <Item title={item.name} price={item.price} key={i}></Item>
              );
            return "";
          })}
        </div>
      </div>
    );
  }
}

export default ItemList;
