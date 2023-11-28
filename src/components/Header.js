import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import pic from '../images/cat.jpg'


const Header = () => {
  return (
    <div className="header__wrapper">
      <div className='header_body'>
        <div>
          <input type='search' placeholder='Search' ></input>
        </div>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Shirts</Button>
        <Button variant="outlined">Pants</Button>
        <Button variant="outlined">Shoes</Button>
      </Stack>
          <div>
          <Stack direction="row" spacing={2}>
             <Avatar alt="cat pic" src={pic}  />\<img width="32" height="32" src="https://img.icons8.com/arcade/64/shopping-cart--v2.png" alt="shopping-cart--v2"/>
          </Stack>
            
          </div>
      </div>
      
    </div>
  )
}

export default Header