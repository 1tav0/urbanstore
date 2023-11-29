import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import pic from '../images/cat.jpg'
import SearchIcon from '@mui/icons-material/Search';
import ShirtIcon from '../svgs/ShirtIcon';
import PantsIcon from '../svgs/PantsIcon';
import ShoesIcon from '../svgs/ShoesIcon';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    // <div className="header__wrapper">
    //   <div className='header_body'>
    //     <div>
    //       <input type='search' placeholder='Search' ></input>
    //     </div>
    //   <Stack direction="row" spacing={2}>
    //     <Button variant="outlined">Shirts</Button>
    //     <Button variant="outlined">Pants</Button>
    //     <Button variant="outlined">Shoes</Button>
    //   </Stack>
    //       <div>
    //       <Stack direction="row" spacing={2}>
    //          <Avatar alt="cat pic" src={pic}  />
    //       </Stack>
    //       </div>
    //   </div>
      
    // </div>
    <div className="header__wrapper">
      <div className="header__main">
        <div className="header__search">
          <Link to='/'>
            <img 
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              className='header__logo' alt='logo'
            />
          </Link>
          <input type='search' placeholder='Search' className='header__input'></input>
          <SearchIcon className='header__searchicon'/>
        </div>
        <div className="header__buttons">
          <Button variant="outlined" endIcon={<ShirtIcon className='header__icon'/>}>Shirts</Button>
          <Link to='/pants'>
            <Button variant="outlined" endIcon={<PantsIcon className='header__icon'/>}>Pants</Button>
          </Link>
          <Button variant="outlined" endIcon={<ShoesIcon className='header__icon'/>}>Shoes</Button>
        </div>
        <div className="header__authentication">
          <Link to='/login'>
            <div className="header__option">
              <span className='header__caretop'>
                Hello, Guest
              </span>
              <span className='header__carebottom'>
                SignIn
              </span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className="header__option">
              <span className='header__caretop'>
                Returns
              </span>
              <span className='header__carebottom'>
                & Orders
              </span>
            </div>
          </Link>
          <Link to='/basket'>
            <div className="header__basket">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </Link>
          <Avatar alt='catpic' src={pic} className='header__avatar' />
        </div>
      </div>
    </div>
  )
}

export default Header