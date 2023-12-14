import "./App.css";
import React, { Component } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

class App extends Component {
  state = {
    items: [
      { id: 1, product: "Pen", price: 2 },
      { id: 2, product: "Book", price: 10 },
    ],
  };

  plusMinusHandler = (id, operation) => {
    let items = this.state.items;

    let item = items.find((item) => item.id === id);
    let filteredItems = items.filter((item) => item.id !== id);

    let newItem = { ...item, quantity: 1 };

    if (operation === "plus") {
      newItem = {
        ...item,
        quantity: item?.quantity ? +item.quantity + 1 : 2,
      };
    } else if (operation === "minus") {
      newItem = {
        ...item,
        quantity: item?.quantity > 1 ? item.quantity - 1 : 1,
      };
    }
    items = [...filteredItems, newItem];

    items.sort((a, b) => a.id - b.id);

    this.setState({ items: items });
  };

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
  };

  addItem = (item) => {
    this.state.items.length > 0
      ? (item.id = this.state.items[this.state.items.length - 1].id + 1)
      : (item.id = 1);
    console.log(item.id);
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items
            items={this.state.items}
            del={this.deleteItem}
            plusMinusHandler={this.plusMinusHandler}
          />
          <AddItem add={this.addItem} />
          <Total items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
