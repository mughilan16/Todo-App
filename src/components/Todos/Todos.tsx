import React from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { state } from "../../atom/todoAtom";
import Group from "./Group";

const Todos: React.FC = () => {
  const [todoState, setTodoState] = useRecoilState(state);
  return (
    <Flex direction="column">
      {todoState.groups.map((group, index) => {
        return <Group group={group} key={index} />;
      })}
    </Flex>
  );
};
export default Todos;
