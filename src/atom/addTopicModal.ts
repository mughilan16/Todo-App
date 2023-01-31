import { atom } from "recoil";
import type { Todo } from "../types/Todo";

export interface addTopicModalState {
  open: boolean;
}

const defaultAddTopicModal: addTopicModalState = {
  open: false,
};

export const addTopicModal = atom({
  key: "addTopicModalAtom",
  default: defaultAddTopicModal,
});
