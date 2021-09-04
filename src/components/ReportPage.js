import { Box, Card, CardHeader, CardContent, makeStyles } from "@material-ui/core";
import { useTodoContext } from "../contexts/TodoContext";
import { useConfigContext } from "../contexts/ConfigContext";
import { build } from "../template/template";
import { Fragment } from "react";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    width: 'auto',
    maxWidth: 600,
  },
}));

const ReportPage = props => {
  const classes = useStyles();
  const todoState = useTodoContext();
  const configs = useConfigContext();
  const builtText = build(configs.template, todoState);

  return (
    <Card className={classes.card}>
      <CardHeader title="レポート" />
      <CardContent>
        <Box>
          {
            builtText.split("\n").map((text, index) => (
              <Fragment key={`report-content-${index}`}>{text}<br /></Fragment>
            ))
          }
        </Box>
      </CardContent>
    </Card >
  );
};

export default ReportPage;