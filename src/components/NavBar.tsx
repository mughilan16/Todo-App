import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const NavBar: React.FC = () => {
  return (
    <Flex width="100%" bg="blue.500" align="center">
      <Text
        width="100%"
        fontSize={24}
        fontWeight={800}
        fontFamily="monospace"
        textColor="whitesmoke"
        m={2}
        ml={4}
      >
        Todo List
      </Text>
      <Button bg="blue.500">
        <AddIcon color="whitesmoke" boxSize={5} />
      </Button>
    </Flex>
  );
};
export default NavBar;
