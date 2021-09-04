import {
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  TextField,
  Slider,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { minutesToTimeText } from '../utils/utils';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    marginTop: '2rem',
    marginBottom: '2rem',
    width: 'auto',
    maxWidth: 600,
  },
  moveBtn: {
    marginLeft: 'auto',
  },
  restoreBtn: {
    marginLeft: 'auto',
  },
}));

const TodoItem = ({ item, dispatch, disabled }) => {
  const classes = useStyles();

  const isDueDateDefined = item.dueDate.length !== 0;
  const dueDateText = isDueDateDefined
    ? item.dueDate.substring(item.dueDate.indexOf('-') + 1).replace('-', '/')
    : '未設定'
  const spentTimeValue = minutesToTimeText(item.spentTimeMinutes);

  const timeTextToMinutes = timeText => {
    if (timeText == null) { return 0; }
    const [h, m] = timeText.split(':').map(str => parseInt(str));
    return h * 60 + m;
  };

  return (
    <Card className={classes.card} elevation={2}>
      <CardHeader title={`#${item.id} ${item.name}`} />
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography>期限 {dueDateText}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography>進捗 {item.progress}%</Typography>
            <Slider
              value={item.progress}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
              onChange={
                (e, value) => dispatch({ type: 'update progress', payload: { id: item.id, progress: value } })
              }
              disabled={disabled}
            />
          </Grid>
        </Grid>
        <Grid container spaceing={2} alignItems="flex-end">
          <Grid item xs={3}>
            <Typography color={item.isProductive ? "textPrimary" : "textSecondary"}>{item.isProductive ? '生産' : '非生産'}</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="時間"
              type="time"
              value={spentTimeValue}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1800,
              }}
              onChange={
                (e) => dispatch({ type: 'update spent time', payload: { id: item.id, spentTimeMinutes: timeTextToMinutes(e.target.value) } })
              }
              disabled={disabled}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="備考"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={
                e => dispatch({ type: 'update remarks', payload: { id: item.id, remarks: e.target.value } })
              }
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {
          disabled
            ? (
              <Button
                className={classes.restoreBtn}
                variant="outlined"
                color="default"
                size="small"
                onClick={() => dispatch({ type: 'restore', payload: { id: item.id } })}
              >戻す</Button>
            )
            : (
              <>
                <ButtonGroup
                  className={classes.moveBtn}
                  variant="outlined"
                  color="default"
                  size="small"
                >
                  <Button onClick={() => dispatch({ type: 'up', payload: { index: item.order } })}>
                    <ArrowUpward />
                  </Button>
                  <Button onClick={() => dispatch({ type: 'down', payload: { index: item.order } })}>
                    <ArrowDownward />
                  </Button>
                </ButtonGroup>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={
                    () => dispatch({ type: 'done', payload: { id: item.id } })
                  }
                >完了</Button>
              </>
            )
        }
      </CardActions>
    </Card>
  );
};

export default TodoItem;