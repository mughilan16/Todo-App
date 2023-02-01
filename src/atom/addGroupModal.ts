import { atom } from "recoil";
import type { Todo } from "../types/Todo";

export interface addGroupModalState {
  open: boolean;
  color: string;
}

const defaultAddGroupModal: addGroupModalState = {
  open: false,
  color: "",
};

export const addGroupModal = atom({
  key: "addTopicModalAtom",
  default: defaultAddGroupModal,
});
