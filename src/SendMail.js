import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux/es/exports';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        dispatch(closeSendMessage())
    };

  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
            <h3>New Message</h3>
            <IconButton>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className='sendMail_close' />
            </IconButton>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input
             name='to'
             placeholder='To'
             type='email' 
             {...register('to', { required: true })}
             />
             {errors.to && (<p className='sendMail_error'>To is Required!</p>)}
             

            <input name='subject' placeholder='Subject' type='text' {...register('subject', { required: true })}
            />
            {errors.subject && (<p className='sendMail_error'>Subject is Required!</p>)}
            <input name='message' placeholder='Type your message here...' type='text' className='sendMail_message' {...register('message', { required: true })} 
            />
            {errors.message && (<p className='sendMail_error'>Message is Required!</p>)}

            <div className='sendMail_options'>
                <Button type='submit' className='sendMail_send'>Send</Button>
            </div>
        </form>
      
    </div>
  )
}

export default SendMail
