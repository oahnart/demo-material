import { Box, Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    color: "black",
    textDecoration: "none",
    fontWeight: 600,
  },
}));

export const CategoryProduct = ({ title = "", routes = [] }) => {
  const classes = useStyles();
  return (
    <>
      <Box fontSize="30px" paddingBottom="10px">
        {title}
      </Box>
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
