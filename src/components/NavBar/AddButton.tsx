import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button, Modal } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { addGroupModal } from "../../atom/addGroupModal";
import AddTopicModal from "./AddGroupModal";
import { myColor } from "../../colors";
const AddButton: React.FC = () => {
  const setModal = useSetRecoilState(addGroupModal);
  const clickHandler = () => {};
  const getRandomColor = () => {
    let randomNumber = Math.floor(Math.random() * myColor.length);
    // setTempTopic((prev) => ({ ...prev, color: myColor[randomNumber] }));
    return myColor[randomNumber];
  };
  return (
    <Button
      bg="blue.500"
      _hover={{
        bg: "blue.400",
      }}
      borderRadius={90}
      onClick={() => {
        setModal({ open: true, color: getRandomColor() });
      }}
    >
      <AddIcon color="whitesmoke" boxSize={5} />
      <AddTopicModal />
    </Button>
  );
};
export default AddButton;
