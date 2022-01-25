import React from "react";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task !== "") {
      // gửi ra component cha
      this.props.createTask(this.state.task);
      // set input value = ""
      this.setState({
        task: "",
      });
      // focus sau khi submit
      e.target.elements.todo.focus();
    }
  }

  // đổi state khi input thay đổi
  handleInputChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            name="todo"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.task}
            placeholder="Enter todo"
          ></input>
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default InputTodo;
