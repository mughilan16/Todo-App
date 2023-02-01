import React from "react";
import { groupState } from "../../atom/todoAtom";
import { Button, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

type GroupProps = {
  group: groupState;
};

const Group: React.FC<GroupProps> = (props) => {
  return (
    <Flex m={5} border="1px solid gray.200" direction="column">
      <Flex
        align="center"
        color="whitesmoke"
        fontSize={22}
        fontWeight={500}
        fontFamily="monospace"
        width="100%"
        bg={props.group.color}
      >
        <Text m={2} width="100%">
          {props.group.name}
        </Text>
        <Button
          bg={props.group.color}
          mr={2}
          _hover={{ bg: props.group.color }}
        >
          <DeleteIcon
            color="gray.200"
            boxSize={5}
            _hover={{ color: "white" }}
          />
        </Button>
      </Flex>
      <Text>Text</Text>
    </Flex>
  );
};
export default Group;
