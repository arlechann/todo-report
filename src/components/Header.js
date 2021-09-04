import { Box, AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    display: 'inline-block',
    width: '40%',
  },
  tab: {
    display: 'inline-block',
    width: '80%',
    marginLeft: 'auto',
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} component="h1">
            Todo-Report
          </Typography>
          <Box className={classes.tab}>
            {props.children}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;