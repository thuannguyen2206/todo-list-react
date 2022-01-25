import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["hello", "world"],
    };

    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleCreateTodo(todo) {
    const index = this.state.todos.indexOf(todo);
    if (index > -1) {
      // đã có trong mảng => không thêm vào
      console.log("This todo already exist");
    } else {
      const arr = [todo, ...this.state.todos];
      this.setState({
        todos: arr,
      });
    }
  }

  // xóa todo item
  handleRemoveTodo(todo) {
    const arr = this.state.todos;
    const index = arr.indexOf(todo);
    if (index > -1) {
      arr.splice(index, 1);
      this.setState({
        todos: arr,
      });
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <InputTodo createTask={this.handleCreateTodo}></InputTodo>
          <ListTodo
            todos={this.state.todos}
            removeTodo={this.handleRemoveTodo}
          ></ListTodo>
        </div>
      </>
    );
  }
}

export default App;
