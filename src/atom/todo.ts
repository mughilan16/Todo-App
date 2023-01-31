import { atom } from "recoil";
import type { Todo } from "../types/Todo";

const todos: Array<Todo> = [];

export const todoList = atom({
  key: "todoState",
  default: todos,
});
