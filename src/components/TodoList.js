import TodoItem from "./TodoItem";
import { Box } from "@material-ui/core";

const TodoList = props => {
  const order = props.disabled ? [...props.order].reverse() : [...props.order];

  return (
    <Box>
      {order.map((id, index) => {
        return (
          <TodoItem key={id} item={{ ...props.items[id], order: index }} dispatch={props.dispatch} disabled={props.disabled} />
        );
      })}
    </Box>
  );
};

export default TodoList;