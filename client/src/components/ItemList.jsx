import React from "react";
import Tile from "./Tile";
import Item from "./Item";
import Info from "./Info";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    };
  }

  componentDidMount() {
    fetch("/products")
      .then(res => res.json())
      .then(data => {
        data.map((item, i) => {
          this.setState({ products: this.state.products.concat([item]) });
          if (!this.state.categories.includes(item.category))
            this.setState({
              categories: this.state.categories.concat([item.category])
            });
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div>
        {this.state.error && <h1>Product List Unavailable</h1>}

        {this.state.categories && (
          <div>
            <Info>Categories:</Info>
            <div className="row category">
              <Tile
                active={typeof this.props.match.params.category == "undefined"}
                title="ALL"
                link={`/snackspace`}
              />

              {this.state.categories.map((item, i) => {
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

            {this.state.products && (
              <div>
                <Info>Items:</Info>
                <div className="row">
                  {this.state.products.map((item, i) => {
                    let thisCat =
                      this.props.match.params.category === item.category;
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
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ItemList;
