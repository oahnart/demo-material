/**
 * @author [vincent]
 * @email [tranhao491999@gmail.com]
 * @create date 2021-06-28 14:04:42
 * @modify date 2021-06-28 14:04:42
 * @desc [description]
 */
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
import { Footer } from "../../components/Footer";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1170,
    margin: "0 auto",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      maxWidth: 965,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 800,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 625,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 360,
      fontSize: 11,
    },
  },
  slider: {
    marginTop: "133px",
    padding: "0 230px",
    [theme.breakpoints.down("lg")]: {
      marginTop: "100px",
      padding: "0 100px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "100px",
      padding: "0 50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
      padding: "0 30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "70px",
      padding: "0 10px",
    },
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
      transition: "all 0.8s ease",
    },
    "&:hover:after": {
      left: 0,
      width: "100%",
    },
  },
  imageCategory: {
    position: "relative",
    overflow: "hidden",
    "&:hover img": {
      transform: "scale(1.1)",
      transition:
        "transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
    "& img": {
      transition:
        "transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),-webkit-transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)",
    },
  },
}));

const dataTop = [
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/trc-den-rnl.jpg?v=1623312422000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/sau-den-rnl.jpg?v=1623312422000",
    ],
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/chi-ghi-sau.jpg?v=1623312702000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/chi-ghi-trc.jpg?v=1623312703000",
    ],
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clowzzz-2-1.jpg?v=1624611371000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clowzzz-2-4.jpg?v=1624611371000",
    ],
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/1-2.jpg?v=1623987835000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/2-2.jpg?v=1623987835000",
    ],
    SaleOff: "- 20%",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
];

const dataBottom = [
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/e4962c24-e160-4fcf-934e-251999f043e6.jpg?v=1613990933000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/6374f24b-ee31-42e6-bca5-5c1040ea944e.jpg?v=1613990941000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/11c48893-724d-4b8a-99eb-fff85dd20272.jpg?v=1613990718000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/8df22956-d833-41f1-b34f-93b065d8f097.jpg?v=1613990724000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownzz-133.jpg?v=1624610821000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownzz-13-1.jpg?v=1624610821000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/straight-pants-ghi-1.jpg?v=1624615406000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/straight-pants-den-2.jpg?v=1624615406000",
    ],
    Status: "New Arrival",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
];
const dataAccessories = [
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownz-belt-bag1.jpg?v=1616636910000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clownz-belt-bag3.jpg?v=1616636910000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/img-9714-1-min-thumb.jpg?v=1616058950000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/img-9716-1-min-thumb.jpg?v=1616058950000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-2-min.jpg?v=1624508763000",
    ],
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clear-bag-black.jpg?v=1620124174000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clowz-1-1.jpg?v=1620903298000",
    ],
    Status: "New Arrival",
    Title: "T-SHIRTS / LONG SLEEVES / POLO SHIRTS",
    Name: "[SIZE L] GIVE THE RAINBOW BOX",
    Price: "299.000đ",
    SalePrice: "1.494.000đ",
  },
];

const dataNewArrival = [
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/fdfwiqna-jpeg.jpg?v=1623310818000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/icjrgp-w-jpeg.jpg?v=1623310818000",
    ],
    // Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/uihfgj2w-jpeg.jpg?v=1623311007000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/7gslvkwq-jpeg.jpg?v=1623311007000",
    ],
    Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/quan-laugh-now.jpg?v=1624876128000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz3-4.jpg?v=1624876130000",
    ],
    Status: "New Arrival",
    Title: "CAPS",
    Name: "CLOWNZ GRAFFITI TAG TRUCKER HAT",
    Price: "299.000đ",
  },
  {
    UrlImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000",
      "https://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-2-min.jpg?v=1624508763000",
    ],
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
      <Box className={classes.slider}>
        <img
          width="100%"
          height="auto"
          alt="image"
          src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/slider_3.jpg?1625109778279"
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
        <Box margin="0 0 35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . NEW ARRIVAL" />
        </Box>
        <Grid container spacing={3}>
          <Grid item xl={4} md={6} sm={12}>
            <Box className={classes.imageCategory}>
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
          <Grid item xl={4} md={6} sm={12}>
            <Box className={classes.imageCategory}>
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
          <Grid item xl={4} md={6} sm={12}>
            <Box className={classes.imageCategory}>
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
        <Box margin="0 0 35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . TOP" />
        </Box>
        <Box padding="42px 0">
          <CategoryProduct title="BOTTOM" routes={["Jeans & Denim", "Pants"]} />
        </Box>
        <Product dataSource={dataBottom} />
        <Box margin="0 0 35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . BOTTOM" />
        </Box>
        <Box padding="42px 0">
          <CategoryProduct
            title="ACCESSORIES"
            routes={["Bag", "Backpack", "Others", "Hat"]}
          />
        </Box>
        <Product dataSource={dataAccessories} />
        <Box margin="0 0 35px 0">
          <ButtonViewDetail name="XEM TẤT CẢ . ACCESSORIES" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
