import React from "react";
import NavBar from "./NavBar/NavBar";
import Todos from "./Todos/Todos";

const TodoApp: React.FC = () => {
  return (
    <>
      <NavBar />
      <Todos />
    </>
  );
};
export default TodoApp;
