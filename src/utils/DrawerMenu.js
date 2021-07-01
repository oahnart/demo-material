import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  listDrawer: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
    "& .MuiListItemText-primary": {
      fontWeight: 600,
      letterSpacing: 1,
      "&:hover": {
        color: "#916841",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },
  },
}));

const DrawerMenu = ({
  visibleDrawer = false,
  toggleDrawer = () => {},
  listMenuItem = [],
  ...props
}) => {
  const classes = useStyles();
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [openAccess, setOpenAccess] = useState(false);

  const handleClickTop = () => {
    setOpenTop(!openTop);
  };
  const handleClickBottom = () => {
    setOpenBottom(!openBottom);
  };
  const handleClickAccess = () => {
    setOpenAccess(!openAccess);
  };

  const list = () => (
    <List className={classes.listDrawer}>
      <ListItem button>
        <ListItemText primary="HAPPY PRIDE MONTH" />
      </ListItem>
      <ListItem button onClick={handleClickTop}>
        <ListItemText primary="TOP" />
        {openTop ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTop} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Hoodie" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sweatshirt" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Jacket" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="T-Shirt" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Shirt" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickBottom}>
        <ListItemText primary="BOTTOM" />
        {openBottom ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openBottom} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Jeans & Denim" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Pants" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClickAccess}>
        <ListItemText primary="ACCESSORY" />
        {openAccess ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAccess} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Bag" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Backpack" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Others" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Hat" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="MAGAZINE" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="CLOWNZ X RNL" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Đăng nhập" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Đăng ký" />
      </ListItem>
    </List>
  );

  return (
    <Drawer anchor="left" open={visibleDrawer} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};
export default DrawerMenu;
