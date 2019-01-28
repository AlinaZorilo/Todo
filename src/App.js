import React, { Component } from "react";
import List from "./TodoList/index";
import Form from "./Form";
import styled from "styled-components";

class Todo {
  constructor(obj) {
    if (obj && obj.task) {
      this.isCompleted = obj.isCompleted || false;
      this.task = obj.task;
    } else {
      throw new Error("Cannot create todo item without task");
    }
  }
}

class Todos {
  items: [];
  lsKey: "todos";

  populate() {
    this.items = this.get();
  }

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.lsKey)) || [];
    } catch (e) {}
    return [];
  }

  save() {
    localStorage.setItem(this.lsKey, JSON.stringify(this.items));
  }

  toggle(id) {
    this.items[id].isCompleted = !this.items[id].isCompleted;
    this.save();
  }

  add(obj) {
    const item = obj instanceof Todo ? obj : new Todo(obj);

    this.items = [...this.items, item];
    this.save();
  }

  remove(id) {
    this.items = this.items.filter((todo, index) => {
      return index !== id;
    });
    this.save();
  }

  update(id, task) {
    this.items[id].task = task;
    this.save();
  }
}

const todos = new Todos();
todos.populate();

const App = styled(
  class extends Component {
    state = {
      todos: todos.items,
      todoToShow: "all"
    };

    updateTodoToShow = s => {
      this.setState({
        todoToShow: s
      });
    };

    createTask = task => {
      task = task.trim();
      if (!task) {
        return;
      }
      todos.add({
        task,
        isCompleted: false
      });
      this.setState({ todos: todos.items });
    };

    toggleTask = taskId => {
      todos.toggle(taskId);
      this.setState({ todos: todos.items });
    };

    editTask = (taskId, task) => {
      todos.update(taskId, task);
      this.setState({ todos: todos.items });
    };

    deleteTask = taskId => {
      todos.remove(taskId);
      this.setState({ todos: todos.items });
    };

    render() {
      return (
        <div className={this.props.className}>
          <h1>TODOs</h1>
          <Form createTask={this.createTask} />
          {this.state.todos.length ? (
            <div className="status">
              <button onClick={() => this.updateTodoToShow("all")}>All</button>
              <button onClick={() => this.updateTodoToShow("active")}>
                Active
              </button>
              <button onClick={() => this.updateTodoToShow("complete")}>
                Complete
              </button>
            </div>
          ) : null}

          <List
            todos={todos.items}
            toggleTask={this.toggleTask}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            todoToShow={this.state.todoToShow}
          />
        </div>
      );
    }
  }
)`
  .status {
    display: table;
    margin: 0 auto;
    width: 85%;
    padding: 10px;
    button {
      margin-right: 10px;
      border: none;
      color: white;
      background: #16a085;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;
    }
  }
`;
export default App;
