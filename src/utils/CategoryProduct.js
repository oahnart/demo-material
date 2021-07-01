import { Box, Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    color: "black",
    textDecoration: "none",
    fontWeight: 600,
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: 11,
    },
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
}));

export const CategoryProduct = ({ title = "", routes = [] }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.title}>{title}</Box>
      <Breadcrumbs aria-label="breadcrumb" style={{ display: "inline-block" }}>
        {routes.map((e) => (
          <Link href="#" className={classes.breadcrumb}>
            {e}
          </Link>
        ))}
      </Breadcrumbs>
    </>
  );
};
