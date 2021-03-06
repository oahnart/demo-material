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
              <LocationOnIcon /> <span>C??NG TY TNHH 2 TH??NH VI??N CLOWNZ</span>
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
            <Box>LI??N H???</Box>
            <Box>CLOWNZ STORE S??I G??N</Box>
            <Box alignItems="baseline !important">
              <LocationOnIcon /> <span>The New Play Ground L?? Lai</span>
            </Box>
            <Box>CLOWNZ STORE H?? N???I</Box>
            <Box>
              <LocationOnIcon /> <span>43 N??i Tr??c, Ba ????nh, HN</span>
            </Box>
            <Box>
              <LocationOnIcon /> <span>19 H??? ?????c Di, ?????ng ??a, HN</span>
            </Box>
            <Box>
              <LocationOnIcon />
              <span>The New Play Ground Vincom B?? Tri???u</span>
            </Box>
            <Box>
              <AirportShuttleIcon /> <span>Ship COD to??n qu???c</span>
            </Box>
            <Box>
              <CardGiftcardIcon /> <span>FREESHIP ????n h??ng t??? 700.000??</span>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} className={classes.itemFooter}>
            <Box>CH??NH S??CH</Box>
            <Box>CH??NH S??CH TH??NH VI??N</Box>
            <Box>CH??NH S??CH ?????I TR???</Box>
            <Box>CH??NH S??CH V???N CHUY???N</Box>
          </Grid>
          <Grid item md={3} sm={6} className={classes.itemFooter}>
            <Box>????NG K?? NH???N TIN</Box>
            <Box>
              Nh???n th??ng tin s???n ph???m m???i nh???t, tin khuy???n m??i v?? nhi???u h??n n???a.
            </Box>
            <Box>
              <InputBase
                className={classes.margin}
                placeholder="Email c???a b???n"
                inputProps={{ "aria-label": "naked" }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="black"
                className={classes.btnCustom}
              >
                ????NG K??
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
