import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";
import { useDispatchTodoContext } from "../contexts/TodoContext";
import useInput from "../hooks/useInput";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    padding: "1rem",
    maxWidth: 600,
    verticalAlign: "bottom",
  },
  marginZero: {
    margin: 0,
  },
}));

const AddForm = props => {
  const dispatch = useDispatchTodoContext();

  const name = useInput("");
  const dueDate = useInput("");
  const isProductive = useInput(false);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      name: name.value,
      dueDate: dueDate.value,
      isProductive: isProductive.value,
    }
    dispatch({ type: 'add', payload: { item: item } });
  };

  return (
    <Paper className={classes.paper} elevation={2}>
      <form onSubmit={handleSubmit}>
        <Grid className={classes.gridContainer} spacing={1} container alignItems="flex-end">
          <Grid item xs={12}>
            <TextField
              label="タスク"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              {...name}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="期限"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              {...dueDate}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={<Checkbox className={classes.marginZero} color="primary" {...isProductive} />}
              label="生産的"
              labelPlacement="start"
            />
          </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="contained" color="default">追加</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddForm;