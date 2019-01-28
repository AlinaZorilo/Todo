import React, { Component } from "react";
import styled from "styled-components";

const CreateTodo = styled(
  class extends Component {
    onSubmit = e => {
      this.props.createTask(this.refs.taskMessage.value);
      this.refs.taskMessage.value = "";
      e.preventDefault();
    };
    render() {
      return (
        <form onSubmit={this.onSubmit} className={this.props.className}>
          <input type="text" placeholder="Task" ref="taskMessage" autoFocus />
          <button>Add</button>
        </form>
      );
    }
  }
)`
  border-bottom: 1px solid #ecf0f1;
  padding: 1em 0;
  width: 85%;
  display: table;
  margin: 0 auto;

  input,
  button {
    padding: 0.5em;
    margin: 2px;
    display: inline-block;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.19);
  }
  input {
    border: 2px solid #16a085;
    width: calc(100% - 50px);
  }
  button {
    background: #16a085;
    color: #fff;
    border: none;
    padding: 0.7em;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default CreateTodo;
