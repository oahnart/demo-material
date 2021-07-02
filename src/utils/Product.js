import React from "react";
import { Grid, Box, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    // overflow: "hidden",
    // height: 440,
    // [theme.breakpoints.down("md")]: {
    //   height: 400,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: 350,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   height: 300,
    // },
    "&:hover .btnDetail": {
      opacity: 1,
      visibility: "visible",
      // transition: "0.5s linear",
      animation: `$animationTop 0.3s ${theme.transitions.easing.easeInOut}`,
    },
    "&:hover .contentProduct": {
      display: "none",
    },
    "&:hover .img-1": {
      display: "block",
      animation: `$fade-in 1s ${theme.transitions.easing.easeInOut}`,
    },
    // "& .img-0": {
    //   animation: `$fade-out 1s ${theme.transitions.easing.easeInOut}`,
    // },
    "&:hover .img-0": {
      display: "none",
    },
    "& .img-1": {
      display: "none",
    },
  },
  btnDetail: {
    display: "inline-block",
    textAlign: "center",
    padding: "15px 0",
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 13,
    cursor: "pointer",
    border: "thin solid #000",
    zIndex: 1,
    opacity: 0,
    visibility: "hidden",
    // animation: `$animationBottom 0.3s ${theme.transitions.easing.easeInOut}`,
    // animation: `$animationTop 1s ${theme.transitions.easing.easeInOut}`,
    // transform: "translate3d(0, 0, 0)",
    // transition: "0.5s linear",
    transform: "translateY(40%)",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
    "&:hover a": {
      textDecoration: "none",
      color: "#fff",
    },
    "& a": {
      color: "#000",
    },
  },
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
  "@keyframes animationTop": {
    "0%": {
      transform: "translateY(100%)",
    },
    "100%": {
      transform: "translateY(40%)",
    },
  },
  "@keyframes animationBottom": {
    "0%": {
      transform: "translateY(40%)",
    },
    "100%": {
      transform: "translateY(100%)",
    },
  },
  "@keyframes fade-in": {
    "0%": {
      opacity: 0.3,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes fade-out": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

export const Product = ({ dataSource = [] }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      {dataSource.map((data, index) => (
        <Grid
          item
          md={3}
          sm={6}
          xs={6}
          key={index}
          className={classes.container}
        >
          <Box textAlign="center">
            <Box position="relative" marginBottom="15px">
              {data.UrlImage.map((url, index) => (
                <img
                  key={index}
                  width="100%"
                  alt="image"
                  src={url}
                  className={`img-${index}`}
                />
              ))}
              {data.Status && (
                <Box className={classes.statusProduct}>{data.Status}</Box>
              )}
              {data.SaleOff && (
                <Box className={classes.saleOff}>{data.SaleOff}</Box>
              )}
            </Box>
            <Box className="contentProduct">
              <Box color="#bfbfbf" fontWeight="400">
                {data.Title}
              </Box>
              <Box
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
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
          </Box>
          <Box className={`${classes.btnDetail} btnDetail`}>
            <Link>Chi tiết</Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
