import React from "react";
import { snackspace } from "../config.js";
import Tile from "./Tile";
import Item from "./Item";
import Info from "./Info";

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <Info>Categories:</Info>
        <div className="row category">
          <Tile
            active={
              typeof this.props.match.params.category == "undefined"
            }
            title="ALL"
            link={`/snackspace`}
          />

          {[
            ...new Set(snackspace.products.map((item, i) => item.category))
          ].map((item, i) => {
            let thisCat = this.props.match.params.category === item;
            return (
              <Tile
                active={thisCat}
                title={item}
                link={`/snackspace/category/${item}`}
                key={i}
              />
            );
          })}
        </div>

        <Info>Items:</Info>
        <div className="row">
          {snackspace.products.map((item, i) => {
            let thisCat = this.props.match.params.category === item.category;
            if (
              thisCat ||
              typeof this.props.match.params.category === "undefined"
            )
              return (
                <Item
                  title={item.name}
                  price={item.price}
                  category={item.category}
                  barcode={item.barcode}
                  key={i}
                />
              );
            return "";
          })}
        </div>
      </div>
    );
  }
}

export default ItemList;
