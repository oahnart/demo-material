import { Box, Breadcrumbs, Typography, Link, makeStyles, CardMedia, Grid } from '@material-ui/core'
import React from 'react'
import { Header } from '../../components/Header'

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    color: "black",
    textDecoration: "none",
    fontWeight: 600
  },
  statusProduct: {
    position: "absolute",
    top: 20,
    padding: "2px 14px",
    backgroundColor: "#916814",
    color: "#e9e1d9",
    fontSize: 13
  },
  showAllProduct: {
    display: "inline-block",
    textAlign: "center",
    padding: "15px 35px",
    backgroundColor: "black",
    color: "white",
    fontSize : 13,
    fontWeight : 400
  },
  seemoreWapper : {
    position: "absolute",
    bottom: 40,
    left: 30
  },
  seemore : {
    backgroundColor : "#ffffff",
    fontWeight : 400,
    padding: "12px 35px",
    margin: "10px 0",
    display: "inline-block"
  }
}))

export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box>
        <img width="100%" alt="erorr image" src="https://bizweb.dktcdn.net/thumb/grande/100/414/728/themes/803486/assets/slider_2.jpg?1624099047427" />
      </Box>
      <Box textAlign="center" padding="42px 0">
        <Box fontSize="30px" paddingBottom="10px">NEW ARRIVAL</Box>
        <Breadcrumbs aria-label="breadcrumb" style={{ display: "inline-block" }}>
          <Link href="#" className={classes.breadcrumb}>
            TOP
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            BOTTOM
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            ACCESSORY
          </Link>
        </Breadcrumbs>
      </Box>
      <Box maxWidth="1170px" margin="0 auto">
        <Grid container spacing={1}>
          <Grid item xl={3}>
            <Box textAlign="center">
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000" />
                <Box className={classes.statusProduct}>New Arrival</Box>
              </Box>
              <Box color="#bfbfbf" fontWeight="400">CAPS</Box>
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">CLOWNZ GRAFFITI TAG TRUCKER HAT</Box>
              <Box>299.000đ</Box>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box textAlign="center">
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000" />
                <Box className={classes.statusProduct}>New Arrival</Box>
              </Box>
              <Box color="#bfbfbf" fontWeight="400">CAPS</Box>
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">CLOWNZ GRAFFITI TAG TRUCKER HAT</Box>
              <Box>299.000đ</Box>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box textAlign="center">
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000" />
                <Box className={classes.statusProduct}>New Arrival</Box>
              </Box>
              <Box color="#bfbfbf" fontWeight="400">CAPS</Box>
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">CLOWNZ GRAFFITI TAG TRUCKER HAT</Box>
              <Box>299.000đ</Box>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box textAlign="center">
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/thumb/large/100/414/728/products/clz6-1-min.jpg?v=1624508747000" />
                <Box className={classes.statusProduct}>New Arrival</Box>
              </Box>
              <Box color="#bfbfbf" fontWeight="400">CAPS</Box>
              <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">CLOWNZ GRAFFITI TAG TRUCKER HAT</Box>
              <Box>299.000đ</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" margin="35px auto">
        <Box className={classes.showAllProduct}>XEM TẤT CẢ . NEW ARRIVAL</Box>
      </Box>
      <Box maxWidth="1170px" margin="0 auto">
      <Grid container spacing={3}>
          <Grid item xl={4}>
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_1.jpg?1624099047427" />
                <Box className={classes.seemoreWapper}>
                  <Box color="#ffffff" fontSize="25px" fontWeight={400} letterSpacing={5}>TOP</Box>
                  <Box className={classes.seemore}>XEM THÊM</Box>
                </Box>
              </Box>
          </Grid>
          <Grid item xl={4}>
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_2.jpg?1624099047427" />
                <Box className={classes.seemoreWapper}>
                  <Box color="#ffffff" fontSize="25px" fontWeight={400} letterSpacing={5}>BOTTOM</Box>
                  <Box className={classes.seemore}>XEM THÊM</Box>
                </Box>
              </Box>
          </Grid>
          <Grid item xl={4}>
              <Box position="relative">
                <img width="100%" alt="image" src="http://bizweb.dktcdn.net/100/414/728/themes/803486/assets/ant_index_banner_3.jpg?1624099047427" />
                <Box className={classes.seemoreWapper}>
                  <Box color="#ffffff" fontSize="25px" fontWeight={400} letterSpacing={5}>ACCESSORY</Box>
                  <Box className={classes.seemore}>XEM THÊM</Box>
                </Box>
              </Box>
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" padding="42px 0">
        <Box fontSize="30px" paddingBottom="10px">TOP</Box>
        <Breadcrumbs aria-label="breadcrumb" style={{ display: "inline-block" }}>
          <Link href="#" className={classes.breadcrumb}>
            Hoodie
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            Sweatshirt
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            Jacket
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            T-Shirt
          </Link>
          <Link href="#" className={classes.breadcrumb}>
            Shirt
          </Link>
        </Breadcrumbs>
      </Box>
    </>
  )
}
