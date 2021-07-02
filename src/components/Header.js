import {
  Box,
  makeStyles,
  Divider,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import DrawerMenu from "../utils/DrawerMenu";

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
    backgroundColor: "#fff",
  },
  itemMenu: {
    textAlign: "center",
    position: "relative",
    "&:hover ul": {
      opacity: 1,
      visibility: "visible",
    },
  },
  quantity: {
    position: "absolute",
    left: 11,
    bottom: 12,
    color: "white",
    backgroundColor: "black",
    borderRadius: 20,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textIndent: 3,
    height: 20,
    lineHeight: 20,
    minWidth: 20,
    fontSize: 11,
  },
  button: {
    fontWeight: 600,
    color: "#000000",
    "&:hover": {
      color: "#916841",
      backgroundColor: "transparent",
    },
  },
  itemNav: {
    textAlign: "left",
    position: "absolute",
    backgroundColor: "#fff",
    left: "10%",
    marginTop: 11,
    opacity: 0,
    visibility: "hidden",
    transition: "0.5s linear",
    "& li": {
      padding: "10px 80px 10px 5px",
      borderBottom: "1px solid #f7f7f7",
      minWidth: 125,
      "& a:hover": {
        color: "#916841",
      },
    },
  },
  search: {
    // transform: "translateY(-20%)",
    marginLeft: "25px",
    display: "flex",
    alignItems: "flex-end",
  },
  logo: {
    cursor: "pointer",
  },
}));

export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setVisibleDrawer(open);
  };
  return (
    <Box className={classes.sticky}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="space-between" padding="0 20px">
          <Box
            display="flex"
            alignItems="flex-end"
            minWidth={!isDesktop && "65px"}
          >
            {isDesktop ? (
              <>
                HOTLINE ĐẶT HÀNG:{" "}
                <strong>
                  <Link href="#" color="inherit">
                    058660 8660
                  </Link>
                </strong>
              </>
            ) : (
              <Link onClick={toggleDrawer(true)} color="#000">
                <DehazeIcon />
              </Link>
            )}
          </Box>
          <Box width={isDesktop ? "280px" : "180px"}>
            <Link className={classes.logo} href="#">
              <img
                width="100%"
                alt="error image"
                src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1624099047427"
              />
            </Link>
          </Box>
          <Box
            display="flex"
            alignItems="flex-end"
            minWidth={isDesktop && "275px"}
            justifyContent="flex-end"
          >
            <Box display="flex">
              {isDesktop && <Box>GIỎ HÀNG</Box>}
              <Box position="relative">
                <Link href="#" color="inherit">
                  <AddShoppingCartIcon fontSize="small" />
                </Link>
                <Box className={classes.quantity}>0</Box>
              </Box>
            </Box>
            <Box className={classes.search}>
              <Link href="#" color="inherit">
                <SearchIcon fontSize="small" />
              </Link>
            </Box>
          </Box>
        </Box>
        {isDesktop && (
          <>
            <Box padding="40px 0 5px">
              <Divider light />
            </Box>

            <Box maxWidth="1170px" padding="0 30px">
              <Grid container>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button className={classes.button}>HAPPY PRIDE MONTH</Button>
                </Grid>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button
                    className={classes.button}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    TOP
                  </Button>
                  <ul className={classes.itemNav}>
                    <li>
                      <a href="#">Hoodie</a>
                    </li>
                    <li>
                      <a href="#">Sweatshirt</a>
                    </li>
                    <li>
                      <a href="#">Jacket</a>
                    </li>
                    <li>
                      <a href="#">T-Shirt</a>
                    </li>
                    <li>
                      <a href="#">Shirt</a>
                    </li>
                  </ul>
                </Grid>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button
                    className={classes.button}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    BOTTOM
                  </Button>
                  <ul className={classes.itemNav}>
                    <li>
                      <a href="#">Jeans & Denim</a>
                    </li>
                    <li>
                      <a href="#">Pants</a>
                    </li>
                  </ul>
                </Grid>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button
                    className={classes.button}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    ACCESSORY
                  </Button>
                  <ul className={classes.itemNav}>
                    <li>
                      <a href="#">Bag</a>
                    </li>
                    <li>
                      <a href="#">Backpack</a>
                    </li>
                    <li>
                      <a href="#">Others</a>
                    </li>
                    <li>
                      <a href="#">Hat</a>
                    </li>
                  </ul>
                </Grid>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button className={classes.button}>MAGAZINE</Button>
                </Grid>
                <Grid item md={2} className={classes.itemMenu}>
                  <Button className={classes.button}>CLOWNZ X RNL</Button>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
      <DrawerMenu visibleDrawer={visibleDrawer} toggleDrawer={toggleDrawer} />
    </Box>
  );
};
