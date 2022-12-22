import React from 'react'
import Button from '@mui/material/Button';
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Avatar, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice';

function Sidebar() {

  const dispatch = useDispatch()
  return (
    <div className='sidebar'>
      <div className='firstpart_sidebar'>
        <Button
         startIcon={<AddIcon fontSize='large' />}
         className='sidebar__compose'
         onClick={() => dispatch(openSendMessage())}
         >
            Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title="Inbox" number={9002} selected={true} />
        <SidebarOption Icon={StarIcon} title="Starred" number={9002} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={9002} />
        <SidebarOption Icon={SendIcon} title="Sent" number={9002} />
        <SidebarOption Icon={DraftsIcon} title="Drafts" number={9002} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={9002} />
      </div>

      <div className='middlepart_sidebar'>
        <h2 id='middlepart_meet'>Meet</h2>
        <SidebarOption Icon={VideoCameraBackIcon} title="New Meeting" />
        <SidebarOption Icon={LaptopIcon} title="Join a meeting" />
      </div>

      <div className='lastpart_sidebar'>
        <h2 id='lastpart_hangouts'>Hangouts</h2>
        <SidebarOption Icon={Avatar} title="Vishal" />
      </div>

      <div className='footer_sidebar'>
        <div className='footericons_sidebar'>
        <IconButton>
            <PersonIcon />
        </IconButton>

        <IconButton>
            <ChatIcon />
        </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
