import React from "react";

class ListTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.showTodos = this.showTodos.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  // khi nhấn xóa todo item
  handleRemove(e) {
    let text = e.target.previousSibling.innerText;
    this.props.removeTodo(text);
  }

  toggleComplete(e) {
    e.target.closest("li").classList.toggle("complete");
  }

  showTodos() {
    const listTodos = this.props.todos;
    const result = listTodos?.map((todo) => (
      <li key={todo} onClick={this.toggleComplete}>
        <span>{todo}</span>
        <i className="fa fa-trash" onClick={this.handleRemove}></i>
      </li>
    ));
    return result;
  }

  render() {
    return (
      <>
        <ul className="todos">{this.showTodos()}</ul>
      </>
    );
  }
}

export default ListTodo;
