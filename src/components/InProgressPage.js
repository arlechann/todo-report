import { Box } from '@material-ui/core';
import { useTodoContext, useDispatchTodoContext } from "../contexts/TodoContext";
import TodoList from "./TodoList";
import AddForm from "./AddForm";

const InProgressPage = props => {
  const todoState = useTodoContext();
  const dispatch = useDispatchTodoContext();

  return (
    <Box>
      <TodoList items={todoState.items} order={todoState.inProgress} dispatch={dispatch} />
      <AddForm dispatch={dispatch}></AddForm>
    </Box>
  );
};

export default InProgressPage;