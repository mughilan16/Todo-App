import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, Modal } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { addTopicModal } from "../../atom/addTopicModal";
import AddTopicModal from "./AddTopicModal";

const AddButton: React.FC = () => {
  const setModal = useSetRecoilState(addTopicModal);
  const clickHandler = () => {};
  return (
    <Button
      bg="blue.500"
      _hover={{
        bg: "blue.400",
      }}
      borderRadius={90}
      onClick={() => {
        setModal({ open: true });
      }}
    >
      <AddIcon color="whitesmoke" boxSize={5} />
      <AddTopicModal />
    </Button>
  );
};
export default AddButton;
