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
    <div className="headerwrapper">
      <div className="headermain">
        <div className="headersearch">
          <Link to='/'>
            <img 
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              className='headerlogo' alt='logo'
            />
          </Link>
          <input type='search' placeholder='Search' className='headerinput'></input>
          <SearchIcon className='headersearchicon'/>
        </div>
        <div className="headerbuttons">
          <Button variant="outlined" endIcon={<ShirtIcon className='headericon'/>}>Shirts</Button>
          <Button variant="outlined" endIcon={<PantsIcon className='headericon'/>}>Pants</Button>
          <Button variant="outlined" endIcon={<ShoesIcon className='headericon'/>}>Shoes</Button>
        </div>
        <div className="headerauthentication">
          <Link to='/login'>
            <div className="headeroption">
              <span className='headercaretop'>
                Hello, Guest
              </span>
              <span className='headercarebottom'>
                SignIn
              </span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className="headeroption">
              <span className='headercaretop'>
                Returns
              </span>
              <span className='headercarebottom'>
                & Orders
              </span>
            </div>
          </Link>
          <Link to='/basket'>
            <div className="headerbasket">
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