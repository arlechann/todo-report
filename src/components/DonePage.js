import { Box } from "@material-ui/core";
import { useTodoContext, useDispatchTodoContext } from "../contexts/TodoContext";
import TodoList from "./TodoList";

const DonePage = props => {
  const todoState = useTodoContext();
  const dispatch = useDispatchTodoContext();

  return (
    <Box>
      <TodoList items={todoState.items} order={todoState.done} dispatch={dispatch} disabled />
    </Box>
  );
};

export default DonePage;