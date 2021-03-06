import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { useRouter } from "next/router"
import MenuItem from '@mui/material/MenuItem';


export default function ButtonAppBar() {

  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => {
              router.push("/")
              handleClose()
              }}>
                Home
            </MenuItem>
            <MenuItem onClick={() => {
              router.push("/about")
              handleClose()
              }}>
                About
            </MenuItem>
            <MenuItem onClick={() => {
              router.push("/form")
              handleClose()
              }}>
                Register
            </MenuItem>
            
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bovo
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}