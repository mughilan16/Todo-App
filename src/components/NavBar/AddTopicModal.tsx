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
import React from "react";
import { useRecoilState } from "recoil";
import { addTopicModal } from "../../atom/addTopicModal";

const AddTopicModal: React.FC = () => {
  const [modal, setModal] = useRecoilState(addTopicModal);
  const handleClose = () => {
    setModal({
      open: false,
    });
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
            <form>
              <Flex
                align="center"
                direction="column"
                mt={-3}
                mb={4}
                mr={4}
                ml={2}
              >
                {/* <Text fontSize={18} mr={4}>
                  Name:
                </Text> */}
                <Input
                  height={10}
                  textAlign="center"
                  borderRadius={4}
                  fontSize={18}
                  fontFamily="monospace"
                  placeholder="Group Name"
                  _placeholder={{ color: "gray.800" }}
                  _focus={{
                    border: "1px solid blue.100",
                  }}
                  mb={2}
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
