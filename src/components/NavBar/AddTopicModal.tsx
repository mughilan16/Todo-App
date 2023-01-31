import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Modal Body</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddTopicModal;
