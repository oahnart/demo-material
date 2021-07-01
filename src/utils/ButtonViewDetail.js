import React from "react";
import { makeStyles, Box, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  showAllProduct: {
    display: "inline-block",
    textAlign: "center",
    padding: "15px 35px",
    backgroundColor: "#000",
    color: "white",
    fontSize: 13,
    cursor: "pointer",
    position: "relative",
    border: "thin solid #000",
    zIndex: 1,
    // fontWeight: 400,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
    "&:hover a": {
      textDecoration: "none",
      color: "#000",
    },
    "& a": {
      color: "#fff",
    },
    "&:after": {
      position: "absolute",
      content: "''",
      width: 0,
      height: "100%",
      backgroundColor: "#fff",
      top: 0,
      right: 0,
      zIndex: -1,
      transition: "all 0.6s ease",
    },
    "&:hover:after": {
      left: 0,
      width: "100%",
    },
  },
}));

export const ButtonViewDetail = ({ name = "" }) => {
  const classes = useStyles();

  return (
    <Box className={classes.showAllProduct}>
      <Link>{name}</Link>
    </Box>
  );
};
