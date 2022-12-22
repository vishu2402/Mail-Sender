import ExpandMore from '@mui/icons-material/ExpandMore'
import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './EmailList.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(
        (snapshot) => setEmails(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
    )
        )
}, [])
  return (
    <div className='emailList'>
        <div className='emailList_settings'>
            <div className='emailList_settingsLeft'>
                <Checkbox />

                <IconButton>
                    <ExpandMore />
                </IconButton>

                <IconButton>
                    <RefreshIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>  
            </div>

            <div className='emailList_settingsRight'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>

                <IconButton>
                    <ChevronRightIcon />
                </IconButton>

                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
            </div>
        </div>
        <div className='emailList_sections'>
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={ConnectWithoutContactIcon} title='Social' color='#1A73E8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
        </div>

        <div className='emailList_list'>
            {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds * 1000).toUTCString()}
                 />
            ))}
            <EmailRow
            title='Twitch'
            subject='Hey fellow streamers!!'
            description='Testing Testing'
            time='1:15am' 
            />
            <EmailRow
            title='Twitch'
            subject='Hey fellow streamers!!'
            description='Testing Testing'
            time='1:15am' 
            />
        </div>
    </div>
  )
}

export default EmailList