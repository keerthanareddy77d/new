import React from 'react'
import {useState,useContext,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import {store} from './App';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import VillaIcon from '@material-ui/icons/Home'
import Tooltip from '@mui/material/Tooltip';
import { Card, MenuItem } from '@mui/material'
import {Link} from 'react-router-dom';

const pages = ['My-Profile','MAPS','PROPERTIES','UPLOAD','RAZOR PAY'];
const settings = ['Logout'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [token,setToken]=useContext(store)
    const [data,setData]=useState(null);
useEffect(()=>{
axios.get('http://localhost:5000/myprofile',{
    headers:{
        'x-token':token
    }
}).then(res=>setData(res.data)).catch((err)=>console.log(err))
},[])
    if(!token)
    {
        return <Navigate to='/' />
    }
  return (
    <div>
        <AppBar position="static" style={{ background: '#b388ff' }}>
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            
            <VillaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'cursive',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
         STHIRA PROPERTIES
              
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}
                    <Link style ={{textDecoration : 'none',color : 'white'}} to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              STHIRA PROPERTIES
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                ><Link style ={{textDecoration : 'none',color : 'white'}} to={`/${page}`}>{page}</Link>
                  
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="logout">
                <IconButton onClick={()=>setToken(null)} sx={{ p: 0 }}>
                  <Avatar    
                  style={{
                    margin: "10px",
                    width: "60px",
                    height: "60px",
                  }} />
                </IconButton>
              </Tooltip>
              {/*<Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}
                    <Link style ={{textDecoration : 'none',color : 'white'}} to={`/${setting}`}>{setting}</Link>
                    </Typography>
  
                  </MenuItem>
                ))}
                </Menu>*/}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar