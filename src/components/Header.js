import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  container : {
    maxWidth : 1170,
    margin: "10px auto"
  }
}))

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="flex-end">HOTLINE ĐẶT HÀNG: 058660 8660</Box>
      <Box>
        <img alt="error image" src="https://bizweb.dktcdn.net/100/414/728/themes/803486/assets/logo.png?1624099047427"/>
      </Box>
        <Box display="flex" alignItems="flex-end">
          <Box display="flex">
            <Box>GIỎ HÀNG</Box>
            <AddShoppingCartIcon />
          </Box>
          <Box marginLeft="10px" display="flex" alignItems="flex-end">
            <SearchIcon />
          </Box>
        </Box>
    </Box>
    </Box>
  )
}
