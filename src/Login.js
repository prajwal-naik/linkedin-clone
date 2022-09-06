import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import "./Login.css"

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [profilePic, setProfilepic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userAuth => {
            // console.log("Name: ", userAuth.user.displayName);
            dispatch(login({
                email: userAuth.user.email, 
                uid: userAuth.user.uid, 
                displayName: userAuth.user.displayName, 
                photoUrl: userAuth.user.photoURL,
            }));
        }).catch(error => (
            alert(error)
        ))
    }

    const register = () => {
        if(!name) { 
            return alert("Please enter a full name");
        }
        createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
            // console.log("Updating Firebase Auth name: ", name)
            updateProfile(userAuth.user, {
                displayName: name, 
                photoURL: profilePic,
            })
            // console.log("Name after fb updarte: ", userAuth.user.displayName)
            return userAuth;
        }).then((userAuth) => {
            // alert("Dispatching");
            // console.log("Dispatching: ", userAuth.user)
            dispatch(login({
                email: userAuth.user.email, 
                uid: userAuth.user.uid, 
                displayName: name, 
                photoUrl: userAuth.user.photoURL,
            }));
        }).catch((error) => {
            alert(error.message)
        });
    }

  return (
    <div className='login'>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" 
            alt = "login_logo" 
        />
        <form>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full name (required if you are registering)' />
            <input type="text" value={profilePic} onChange={(e) => setProfilepic(e.target.value)} placeholder='Profile picture URL (optional)' />
            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member? 
            <span className = "login__register" onClick={register}> Register now</span>
        </p>
    </div>
  )
}

export default Login