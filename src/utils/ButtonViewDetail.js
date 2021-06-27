import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  showAllProduct: {
    display: "inline-block",
    textAlign: "center",
    padding: "15px 35px",
    backgroundColor: "black",
    color: "white",
    fontSize: 13,
    fontWeight: 400,
  },
}));

export const ButtonViewDetail = ({ name = "" }) => {
  const classes = useStyles();

  return <Box className={classes.showAllProduct}>{name}</Box>;
};
