import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./App";
import todoItems from "./App";
ReactDOM.render(
  <TodoApp initItems={todoItems} />,
  document.getElementById("root")
);
