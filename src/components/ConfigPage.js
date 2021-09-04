import {
  Box,
  Button,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import { useDispatchTodoContext } from "../contexts/TodoContext";
import { useConfigContext, useDispatchConfigContext } from "../contexts/ConfigContext";
import useTextarea from "../hooks/useTextarea";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    width: 'auto',
    maxWidth: 600,
  },
  textarea: {
    padding: '0.1rem',
    width: '100%',
    fontSize: '1rem',
  },
  actionBtn: {
    marginLeft: "auto",
  },
  deleteBtn: {
    display: "block",
    marginLeft: "auto",
  },
  saveBtn: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
  cancelBtn: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
}));

const ConfigPage = props => {
  const configs = useConfigContext();
  const configDispatch = useDispatchConfigContext();
  const todoDispatch = useDispatchTodoContext();
  const classes = useStyles();

  const template = useTextarea(configs.template);

  const handleSubmit = e => {
    e.preventDefault();
    const config = {
      template: template.value,
    };
    configDispatch({ type: 'set', payload: config })
  };

  const handleDelete = e => {
    todoDispatch({ type: 'all clear' });
    configDispatch({ type: 'reset' });
  };

  const handleReset = e => {
    // template.setValue(configs.template);
  };

  return (
    <Box>
      <Card className={classes.card} elevation={2}>
        <CardHeader title="設定" />
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container>
              <Grid item xs={8}>
                <Typography>LocalStorageのデータの削除</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button className={classes.deleteBtn} variant="contained" color="secondary" onClick={handleDelete}>削除</Button>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid container>
                <Grid item xs={8}>
                  <Typography>レポートテンプレート</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize className={classes.textarea} minRows={3} {...template} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Box className={classes.actionBtn}>
              <Button
                className={classes.saveBtn}
                type="submit"
                variant="contained"
                color="primary"
              >保存</Button>
              <Button
                className={classes.cancelBtn}
                variant="outlined"
                color="secondary"
                onClick={handleReset}
              >リセット</Button>
            </Box>
          </CardActions>
        </form>
      </Card>
    </Box >
  );
};

export default ConfigPage;