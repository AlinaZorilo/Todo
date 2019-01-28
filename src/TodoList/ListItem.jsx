import React, { Component } from "react";
import styled from "styled-components";

const TodosListItem = styled(
  class extends Component {
    state = {
      isEditing: false
    };

    renderActionSection() {
      if (this.state.isEditing) {
        return (
          <td>
            <button className="save" onClick={this.editTask}>
              Save
            </button>
            <button
              className="cancel-btn"
              onClick={this.setEditState.bind(this, false)}
            >
              Cancel
            </button>
          </td>
        );
      }
      return (
        <td>
          <button
            className="edit-btn"
            onClick={this.setEditState.bind(this, true)}
          >
            Edit
          </button>
          <button className="delete-btn" onClick={this.deleteTask}>
            Delete
          </button>
        </td>
      );
    }

    renderTask() {
      const { task } = this.props;
      const taskStyle = {
        cursor: "pointer"
      };

      if (this.state.isEditing) {
        return (
          <td>
            <form onSubmit={this.editTask}>
              <input ref="task" defaultValue={task} autoFocus />
            </form>
          </td>
        );
      }

      return (
        <td onClick={this.toggleTask} style={taskStyle}>
          {task}
        </td>
      );
    }

    render() {
      const { isCompleted } = this.props;
      return (
        <tr
          className={
            this.props.className +
            " todo-" +
            (isCompleted ? "completed" : "not-completed")
          }
        >
          {this.renderTask()}
          {this.renderActionSection()}
        </tr>
      );
    }

    setEditState(isEditing) {
      this.setState({
        isEditing
      });
    }

    toggleTask = () => {
      this.props.toggleTask(this.props.id);
    };

    editTask = e => {
      this.props.editTask(this.props.id, this.refs.task.value);
      this.setState({
        isEditing: false
      });
      e.preventDefault();
    };

    deleteTask = () => {
      this.props.deleteTask(this.props.id);
    };
  }
)`
  &.todo-not-completed {
    td {
      &:first-of-type {
        color: #1abc9c;
      }
    }
  }
  &.todo-completed {
    td {
      &:first-of-type {
        color: #787878;
        text-decoration: line-through;
      }
    }
  }
  &.todo-not-completed,
  &.todo-completed {
    td {
      &:first-of-type {
        font-size: 1.5em;
        font-weight: bold;
        width: 65%;
      }
    }
  }
  td {
    padding: 10px 0;
    width: 15%;
    &:first-of-type {
      width: 100%;
    }
    &:last-of-type {
      text-align: right;
    }
  }

  input {
    width: 100%;
  }

  .edit-btn,
  .save {
    background: #16a085;
    color: white;
  }
  .edit-btn,
  .delete-btn,
  .cancel-btn,
  .save {
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    box-sizing: border-box;
    margin-left: 10px;
    font-size: 14px;
  }
  .delete-btn,
  .cancel-btn {
    background: black;
    color: white;
  }
`;
export default TodosListItem;
