import {
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
  InputBase,
  useTheme,
} from "@material-ui/core";
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    fontSize: 13,
    // lineHeight: 15,
    backgroundColor: "#f9f9f9",
    fontWeight: 700,
    padding: "30px 0",
    letterSpacing: "1px !important",
  },
  container: {
    maxWidth: "1170px",
    margin: "0 auto",
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
  itemFooter: {
    "& > div": {
      display: "flex",
      alignItems: "center",
      padding: "8px 0",
      "& .MuiSvgIcon-root": {
        fontSize: 15,
        paddingRight: 8,
      },
      "& .MuiInputBase-root": {
        width: "100%",
        background: "#f0f0f0",
        padding: "5px 10px",
        "& .MuiInputBase-input": {
          "&::placeholder": {
            fontWeight: 600,
            fontSize: 14,
          },
        },
      },
      "&:first-child": {
        fontWeight: "500",
      },
    },
  },
  contact: {
    [theme.breakpoints.down("md")]: {
      order: "3",
    },
    "& .MuiSvgIcon-root": {
      color: "#00a885",
    },
  },
  btnCustom: {
    width: "100%",
    backgroundColor: "black",
    color: "#fff",
    borderRadius: 0,
    fontSize: 12,
    letterSpacing: 2,
    padding: "11px 0",
    position: "relative",
    border: "thin solid #000",
    zIndex: 1,
    "&:hover": {
      // backgroundColor: "#fff",
      color: "#000",
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
      backgroundColor: "#fff",
    },
  },
  menuFooter: {
    padding: "15px 20px !important",
    justifyContent: "space-around",
  },
  logo: {
    width: 280,
    [theme.breakpoints.down("lg")]: {
      width: 240,
    },
    [theme.breakpoints.down("md")]: {
      width: 190,
    },
    [theme.breakpoints.down("sm")]: {
      width: 230,
    },
    [theme.breakpoints.down("xs")]: {
      width: 230,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box className={classes.wrapperContainer}>
      <Box className={classes.container}>
        <Grid container spacing={4}>
          <Grid item md={3} sm={6} className={classes.itemFooter}>
            <Box className={classes.logo}>
              <img
                alt="error image"
                src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1624099047427"
                width="100%"
              />
            </Box>
            <Box alignItems="baseline !important">
              <LocationOnIcon /> <span>CÔNG TY TNHH 2 THÀNH VIÊN CLOWNZ</span>
            </Box>
            <Box>
              <PhoneIcon /> <span>058660 8660</span>
            </Box>
            <Box>
              <EmailIcon /> <span>duong@clownz.vn</span>
            </Box>
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            className={`${classes.itemFooter} ${classes.contact}`}
          >
            <Box>LIÊN HỆ</Box>
            <Box>CLOWNZ STORE SÀI GÒN</Box>
            <Box alignItems="baseline !important">
              <LocationOnIcon /> <span>The New Play Ground Lê Lai</span>
            </Box>
            <Box>CLOWNZ STORE HÀ NỘI</Box>
            <Box>
              <LocationOnIcon /> <span>43 Núi Trúc, Ba Đình, HN</span>
            </Box>
            <Box>
              <LocationOnIcon /> <span>19 Hồ Đắc Di, Đống Đa, HN</span>
            </Box>
            <Box>
              <LocationOnIcon />
              <span>The New Play Ground Vincom Bà Triệu</span>
            </Box>
            <Box>
              <AirportShuttleIcon /> <span>Ship COD toàn quốc</span>
            </Box>
            <Box>
              <CardGiftcardIcon /> <span>FREESHIP đơn hàng từ 700.000đ</span>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} className={classes.itemFooter}>
            <Box>CHÍNH SÁCH</Box>
            <Box>CHÍNH SÁCH THÀNH VIÊN</Box>
            <Box>CHÍNH SÁCH ĐỔI TRẢ</Box>
            <Box>CHÍNH SÁCH VẬN CHUYỂN</Box>
          </Grid>
          <Grid item md={3} sm={6} className={classes.itemFooter}>
            <Box>ĐĂNG KÝ NHẬN TIN</Box>
            <Box>
              Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
            </Box>
            <Box>
              <InputBase
                className={classes.margin}
                placeholder="Email của bạn"
                inputProps={{ "aria-label": "naked" }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="black"
                className={classes.btnCustom}
              >
                ĐĂNG KÝ
              </Button>
            </Box>
            <Box className={classes.menuFooter}>
              <Box>
                <img
                  alt="img"
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/payment_1.svg?1624869863284"
                />
              </Box>
              <Box>
                <img
                  alt="img"
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/payment_2.svg?1624869863284"
                />
              </Box>
              <Box>
                <img
                  alt="img"
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/payment_3.svg?1624869863284"
                />
              </Box>
              <Box>
                <img
                  alt="img"
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/payment_4.svg?1624869863284"
                />
              </Box>
              <Box>
                <img
                  alt="img"
                  src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/payment_5.svg?1624869863284"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
