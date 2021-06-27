import {
  Box,
  Breadcrumbs,
  Typography,
  Link,
  makeStyles,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React from "react";
import { Header } from "../../components/Header";
import { ButtonViewDetail } from "../../utils/ButtonViewDetail";
import { CategoryProduct } from "../../utils/CategoryProduct";
import { Product } from "../../utils/Product";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1170,
    margin: "0 auto",
    textAlign: "center",

    // [theme.breakpoints.up("md")]: {
    //   backgroundColor: "yellow",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   backgroundColor: "blue",
    // },
    // [theme.breakpoints.up("xl")]: {
    //   backgroundColor: "black",
    // },
    // [theme.breakpoints.up("xxl")]: {
    //   backgroundColor: "green",
    // },
  },
  seemoreWrapper: {
    position: "absolute",
    bottom: 40,
    left: 30,
  },
  seemore: {
    color: "black",
    textDecoration: "none",
    backgroundColor: "#ffffff",
    fontWeight: 400,
    padding: "12px 35px",
    margin: "10px 0",
    display: "inline-block",
    position: "relative",
    zIndex: 1,
    border: "thin solid #fff",
    "&:hover": {
      // backgroundColor: "transparent",
      color: "#fff",
    },
    "&:after": {
      position: "absolute",
      content: "''",
      width: 0,
      height: "100%",
      backgroundColor: "black",
      top: 0,
      right: 0,
      zIndex: -1,
      transition: "all 0.3s ease",
    },
    "&:hover:after": {
      left: 0,
      width: "100%",
    },
  },
}));

const dataTop = [
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2-04-ce14c260-4960-4278-9a27-388bbde2bba5.jpg?v=1624089432000",
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2-04-ce14c260-4960-4278-9a27-388bbde2bba5.jpg?v=1624089432000",
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2-04-ce14c260-4960-4278-9a27-388bbde2bba5.jpg?v=1624089432000",
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2-04-ce14c260-4960-4278-9a27-388bbde2bba5.jpg?v=1624089432000",
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
];

const dataNewArrival = [
  {
    UrlImage:
      "http://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000",
    // Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownzz-133.jpg?v=1624610821000",
    Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clowzzz-2-1.jpg?v=1624611371000",
    Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage:
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/1-2.jpg?v=1623987835000",
    Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
];
export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box marginTop="133px">
        <img
          width="100%"
          height="auto"
          alt="erorr image"
          src="https://bizweb.dktcdn.net/thumb/grande/100/414/728/themes/803486/assets/slider_2.jpg?1624099047427"
        />
      </Box>
      <Box className={classes.container}>
        <Box padding="42px 0">
          <CategoryProduct
            title="NEW ARRIVAL"
            routes={["TOP", "BOTTOM", "ACCESSORY"]}
          />
        </Box>
        <Product dataSource={dataNewArrival} />
        <Box margin="35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . NEW ARRIVAL" />
        </Box>
        <Grid container spacing={3}>
          <Grid item xl={4}>
            <Box position="relative">
              <img
                width="100%"
                alt="image"
                src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_1.jpg?1624099047427"
              />
              <Box className={classes.seemoreWrapper}>
                <Box
                  color="#ffffff"
                  fontSize="25px"
                  fontWeight={400}
                  letterSpacing={5}
                >
                  TOP
                </Box>
                <a className={classes.seemore} href="#">
                  XEM THÊM
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box position="relative">
              <img
                width="100%"
                alt="image"
                src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_2.jpg?1624099047427"
              />
              <Box className={classes.seemoreWrapper}>
                <Box
                  color="#ffffff"
                  fontSize="25px"
                  fontWeight={400}
                  letterSpacing={5}
                >
                  BOTTOM
                </Box>
                <Box className={classes.seemore}>XEM THÊM</Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={4}>
            <Box position="relative">
              <img
                width="100%"
                alt="image"
                src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_3.jpg?1624099047427"
              />
              <Box className={classes.seemoreWrapper}>
                <Box
                  color="#ffffff"
                  fontSize="25px"
                  fontWeight={400}
                  letterSpacing={5}
                >
                  ACCESSORY
                </Box>
                <Box className={classes.seemore}>XEM THÊM</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box padding="42px 0">
          <CategoryProduct
            title="TOP"
            routes={["Hoodie", "Sweatshirt", "Jacket", "T-Shirt", "Shirt"]}
          />
        </Box>
        <Product dataSource={dataTop} />
        <Box margin="35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . TOP" />
        </Box>
      </Box>
    </>
  );
};
