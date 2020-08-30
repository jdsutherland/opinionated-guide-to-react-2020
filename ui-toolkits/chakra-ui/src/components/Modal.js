import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/core";

export default function ModalComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mt='3' onClick={onOpen}>
        Open Modal
      </Button>

      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello</ModalHeader>
          <ModalCloseButton />
          <ModalBody>I am a modal</ModalBody>

          <ModalFooter>
            <Button variantColor="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
