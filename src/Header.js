import React from 'react'
import './Header.css';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux'
import { images } from './constants';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
  return (
    <div className='header'>
        <div className='leftpart_header'>
        <IconButton>
            <WidgetsIcon />
        </IconButton>
        <img src={images.logo} alt=''/>
        <h1 id='icon-name'>Mail Sender</h1>
        </div>

        <div className='middlepart_header'>
            <SearchIcon />
            <input placeholder='Search mails' type='text' />
            <FilterListIcon className='header__inputCarel' />
        </div>

        <div className='rightpart_header'>
            <IconButton>
                <ContactSupportIcon />
            </IconButton>

            <IconButton>
                <SettingsIcon />
            </IconButton>

            <IconButton>
                <AppsIcon />
            </IconButton>

            <IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} />
            </IconButton>
        </div>
      
    </div>
  )
}

export default Header
