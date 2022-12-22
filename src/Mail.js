import React from 'react'
import { useSelector } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Mail.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const navigate = useNavigate()

  const selectedMail = useSelector(selectOpenMail)
  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>

          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <ArchiveIcon />
          </IconButton>

          <IconButton>
            <ReportIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <MarkAsUnreadIcon />
          </IconButton>

          <IconButton>
            <AccessTimeIcon />
          </IconButton>

          <IconButton>
            <AddTaskIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>

          <IconButton>
            <LabelIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className='mail_toolsRight'>

          <IconButton>
            <ChevronLeftIcon />
          </IconButton>

          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>

      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
          <p>{selectedMail?.title}</p>
          <p className='mail_time'>{selectedMail?.time}</p>
        </div>

        <div className='mail_message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Mail
