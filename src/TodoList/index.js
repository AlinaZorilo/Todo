import React, { Component } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const TodosList = styled(
  class extends Component {
    renderItems() {
      return this.props.todos
        .filter(item => {
          if (this.props.todoToShow === "complete") {
            return item.isCompleted;
          } else if (this.props.todoToShow === "active") {
            return !item.isCompleted;
          }

          return true;
        })
        .map((c, index) => {
          return (
            <ListItem
              key={index}
              {...c}
              id={index}
              toggleTask={this.props.toggleTask}
              editTask={this.props.editTask}
              deleteTask={this.props.deleteTask}
            />
          );
        });
    }

    render() {
      if (!this.props.todos.length) {
        return <p className="tutorial">Create your first todo! :)</p>;
      }

      return (
        <div className={this.props.className}>
          <div className="count">
            <h3>
              Todos Left: &#160;
              {this.props.todos.filter(todo => !todo.isCompleted).length}
            </h3>
          </div>

          <table>
            <tbody>{this.renderItems()}</tbody>
          </table>
        </div>
      );
    }
  }
)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  table {
    width: 85%;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    box-sizing: border-box;
  }

  .count {
    display: flex;
    padding: 15px;
    box-sizing: border-box;
    justify-content: center;
    width: 85%;
    h3 {
      color: white;
    }
  }
`;
export default TodosList;
