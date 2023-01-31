import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import AddButton from "./AddButton";

const NavBar: React.FC = () => {
  return (
    <Flex width="100%" bg="blue.500" align="center">
      <Text
        width="100%"
        fontSize={24}
        fontWeight={500}
        fontFamily="monospace"
        textColor="whitesmoke"
        m={2}
        ml={4}
      >
        Todo List
      </Text>
      <AddButton />
    </Flex>
  );
};
export default NavBar;
