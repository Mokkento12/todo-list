import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы
    if (this.state.label.trim()) {
      // проверяем, что строка не пустая
      this.props.onItemAdded(this.state.label); // передаем введенный текст в функцию
      this.setState({ label: "" }); // очищаем поле ввода после добавления
    }
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label} // связываем состояние с инпутом
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
