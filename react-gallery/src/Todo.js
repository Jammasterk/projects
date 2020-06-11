import React, { Component } from "react";
import ListItems from "./ListItems";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.addItem}>
          <h1>Todo List</h1>
          <div className="inputs">
            <input
              type="text"
              placeholder="Add Todo"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add Todo</button>
          </div>
        </form>
        <ListItems items={this.state.items}></ListItems>
      </div>
    );
  }
}

export default Todo;
