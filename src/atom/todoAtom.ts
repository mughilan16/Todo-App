import { atom } from "recoil";
import type { Todo } from "../types/Todo";

export interface TodoState {
  Topic: Array<Array<Todo>>;
}

const defaultTodo: TodoState = { Topic: [] };

export const state = atom({
  key: "todoState",
  default: defaultTodo,
});
