import React, { Component } from "react";
import styled from "styled-components";

const TodosList = styled(
  class extends Component {
    render() {
      return (
        <thead className={this.props.className}>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
      );
    }
  }
)`
  th {
    padding: 10px 0;
  }

  th {
    text-align: left;
    &:last-of-type {
      text-align: right;
    }
  }
`;

export default TodosList;
