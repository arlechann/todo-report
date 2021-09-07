import { Grid, makeStyles } from "@material-ui/core";
import TodoItem from "./TodoItem";

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
}));

const TodoList = props => {
  const classes = useStyles();
  const order = props.disabled ? [...props.order].reverse() : [...props.order];

  return (
    <Grid container className={classes.container} spacing={3}>
      {order.map((id, index) => {
        return (
          <Grid item xs>
            <TodoItem key={id} item={{ ...props.items[id], order: index }} dispatch={props.dispatch} disabled={props.disabled} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TodoList;