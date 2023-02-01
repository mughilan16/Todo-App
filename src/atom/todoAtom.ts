import { atom } from "recoil";
import type { Todo } from "../types/Todo";

export interface groupState {
  name: string;
  description: string;
  color: string;
  todos: Array<Todo>;
}

export interface TodoState {
  groups: Array<groupState>;
  length: number;
}

const defaultTodo: TodoState = {
  groups: [
    {
      name: "Getting Started",
      color: "blue.400",
      description: "Welcome to our app",
      todos: [
        { content: "Create your own group", isChecked: false },
        { content: "Add todos to the group", isChecked: false },
      ],
    },
  ],
  length: 1,
};

export const state = atom({
  key: "todoState",
  default: defaultTodo,
});
