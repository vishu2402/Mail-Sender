import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { login } from './features/userSlice'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }));
    })
    .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
        <div className='login_container'>
        <img src='https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI' alt=''/>
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
      
    </div>
  )
}

export default Login
