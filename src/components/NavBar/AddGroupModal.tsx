import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { ColorPicker } from "chakra-color-picker";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { addGroupModal } from "../../atom/addGroupModal";
import { state } from "../../atom/todoAtom";
import type { groupState } from "../../atom/todoAtom";
import { myColor } from "../../colors";

const AddTopicModal: React.FC = () => {
  const [modal, setModal] = useRecoilState(addGroupModal);
  const [groups, setGroups] = useRecoilState(state);
  const [tempGroup, setTempGroup] = useState<groupState>({
    name: "",
    description: "",
    color: "",
    todos: [],
  });
  const handleColorPicker = (value: string) => {
    setTempGroup((prev) => ({ ...prev, color: value }));
  };
  const handleChangeTopicName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTempGroup((prev) => ({ ...prev, name: event.target.value }));
  };
  const handleChangeTopicDespriction = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTempGroup((prev) => ({ ...prev, description: event.target.value }));
  };
  const handleClose = () => {
    setModal({
      open: false,
      color: "",
    });
  };
  const onSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tempGroup.color == "") {
      console.log("wroking");
      console.log(modal.color);
      tempGroup.color = modal.color;
    }
    setGroups((prev) => ({
      ...prev,
      groups: [...groups.groups, tempGroup],
    }));
    setTempGroup({ color: "", description: "", name: "", todos: [] });
    setModal({ open: false, color: "" });
  };

  return (
    <>
      <Modal isOpen={modal.open} onClose={() => handleClose()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontFamily="monospace">
            Create a new group
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSumbit}>
              <Flex
                align="center"
                direction="column"
                mt={-3}
                mb={4}
                mr={4}
                ml={2}
              >
                <Flex width="100%">
                  <Input
                    height={10}
                    textAlign="start"
                    borderRadius={4}
                    fontSize={18}
                    fontFamily="monospace"
                    placeholder="Name"
                    _placeholder={{ color: "gray.800" }}
                    _focus={{
                      border: "1px solid blue.100",
                    }}
                    mr={2}
                    width="100%"
                    mb={2}
                    required
                    onChange={handleChangeTopicName}
                  ></Input>
                  <ColorPicker
                    defaultColor={modal.color}
                    colors={myColor}
                    onChange={handleColorPicker}
                  />
                </Flex>
                <Input
                  height={10}
                  textAlign="start"
                  borderRadius={4}
                  fontSize={18}
                  fontFamily="monospace"
                  placeholder="Description"
                  _placeholder={{ color: "gray.800" }}
                  noOfLines={2}
                  _focus={{
                    border: "1px solid blue.100",
                  }}
                  mb={2}
                  onChange={handleChangeTopicDespriction}
                  required
                ></Input>
                <Button
                  bg="blue.500"
                  width="100%"
                  fontSize="18"
                  fontFamily="monospace"
                  fontWeight={500}
                  color="whitesmoke"
                  _hover={{
                    bg: "blue.400",
                  }}
                  type="submit"
                >
                  Create
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddTopicModal;
