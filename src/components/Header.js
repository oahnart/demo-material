import { Box, makeStyles, Divider, Grid } from "@material-ui/core";
import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1170,
    margin: "10px auto",
  },
  sticky: {
    position: "fixed",
    top: 0,
    left: 0,
    // width: "100%",
    right: 0,
    zIndex: 99,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  itemMenu: {
    textAlign: "center",
  },
  quantity: {
    position: "absolute",
    left: 11,
    bottom: 12,
    padding: "0 6px",
    color: "white",
    backgroundColor: "black",
    borderRadius: 20,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sticky}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="flex-end">
            HOTLINE ĐẶT HÀNG: 058660 8660
          </Box>
          <Box>
            <img
              alt="error image"
              src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1624099047427"
            />
          </Box>
          <Box display="flex" alignItems="flex-end">
            <Box display="flex">
              <Box>GIỎ HÀNG</Box>
              <Box position="relative">
                <AddShoppingCartIcon fontSize="small" />
                <Box className={classes.quantity}>0</Box>
              </Box>
            </Box>
            <Box marginLeft="25px" display="flex" alignItems="flex-end">
              <SearchIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
        <Box padding="40px 0 10px">
          <Divider light />
        </Box>
        <Box maxWidth="1170px" padding="0 30px">
          <Grid container>
            <Grid item xl={2} className={classes.itemMenu}>
              HAPPY PRIDE MONTH
            </Grid>
            <Grid item xl={2} className={classes.itemMenu}>
              TOP
            </Grid>
            <Grid item xl={2} className={classes.itemMenu}>
              BOTTOM
            </Grid>
            <Grid item xl={2} className={classes.itemMenu}>
              ACCESSORY
            </Grid>
            <Grid item xl={2} className={classes.itemMenu}>
              MAGAZINE
            </Grid>
            <Grid item xl={2} className={classes.itemMenu}>
              CLOWNZ X RNL
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
