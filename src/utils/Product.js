import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  saleOff: {
    position: "absolute",
    right: 0,
    top: 20,
    padding: "2px 14px",
    backgroundColor: "#916814",
    color: "#fff",
    fontSize: 13,
  },
  statusProduct: {
    position: "absolute",
    top: 20,
    padding: "2px 14px",
    backgroundColor: "#916814",
    color: "#e9e1d9",
    fontSize: 13,
  },
  salePrice: {
    textDecoration: "line-through",
    color: "#bbb",
    marginLeft: 12,
  },
}));

export const Product = ({ dataSource = [] }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {dataSource.map((data, index) => (
        <Grid item xl={3} key={index}>
          <Box textAlign="center">
            <Box position="relative">
              <img width="100%" alt="image" src={data.UrlImage} />
              {data.Status && (
                <Box className={classes.statusProduct}>{data.Status}</Box>
              )}
              {data.SaleOff && (
                <Box className={classes.saleOff}>{data.SaleOff}</Box>
              )}
            </Box>
            <Box color="#bfbfbf" fontWeight="400">
              {data.Title}
            </Box>
            <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
              {data.Name}
            </Box>
            <Box display="inline-block">
              <Box display="flex">
                <Box>{data.Price}</Box>
                {data.SalePrice && (
                  <Box className={classes.salePrice}>{data.SalePrice}</Box>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
