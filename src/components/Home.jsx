import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import FlightIcon from '@mui/icons-material/Flight';
import TourIcon from '@mui/icons-material/Tour';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Images from '../Images';
import Avatar from '@mui/material/Avatar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Bottom from './Bottom';







export default function Home() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <MenuIcon onClick={toggleDrawer(true)} style={{ cursor: 'pointer' }} />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p style={{ marginRight: '15px',cursor:'pointer' }}><Link style={{color:'white'}} to="/vacation">VACATION</Link></p>
            <p style={{ marginRight: '15px',cursor:'pointer' }}><Link  style={{color:'white'}} to="/holiday">HOLIDAYS</Link></p>
            <p style={{ marginRight: '15px',cursor:'pointer' }}><Link  style={{color:'white'}} to="/stays">STAYS</Link></p>
            <p style={{ marginRight: '15px',cursor:'pointer' }}><Link  style={{color:'white'}} to="/attractions">ATTRACTIONS</Link></p>
            <Avatar  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}   style={{ height: '20px', width: '20px', marginTop: '15px' }} src="https://media.licdn.com/dms/image/D5603AQGfbsGGlrDmhA/profile-displayphoto-shrink_800_800/0/1680703418549?e=1709769600&v=beta&t=JVV4Er3AGgUYVWwZsm6pj2q5PmqBpUWDBTpO6Uavf_U" />
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={'left'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>
          <List style={{ color: 'blue', fontFamily: 'cursive' }} >
            <ListItem disablePadding>
              <ListItemButton>

                <h2><b>CONFIGURE</b></h2>

              </ListItemButton>
            </ListItem> <Divider />
            <ListItem disablePadding className='list'>
              <ListItemButton>
                <ListItemIcon >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText  >Plannings</ListItemText>
              </ListItemButton>
            </ListItem><Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <FlightIcon />
                </ListItemIcon>
                <ListItemText  >Book Flight</ListItemText>
              </ListItemButton>
            </ListItem><Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <TourIcon />
                </ListItemIcon>
                <ListItemText  >Visit</ListItemText>
              </ListItemButton>
            </ListItem><Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <ScheduleIcon />
                </ListItemIcon>
                <ListItemText  >Schedule</ListItemText>
              </ListItemButton>
            </ListItem><Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <AddLocationIcon />
                </ListItemIcon>
                <ListItemText >
                  Manage Places
                </ListItemText>
              </ListItemButton>
            </ListItem><Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon >
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText  >Help</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem><Divider/>
          <Link to="/logout"><MenuItem onClick={handleClose}> Logout</MenuItem></Link>
        </Menu>
      </SwipeableDrawer>
      <Images />

      <div style={{marginTop:'40px'}}>
      <Bottom/>
      </div>
    </div>
  )
}
