import React,{useEffect, useState} from 'react';
import { GoogleLogin,GoogleLogout } from 'react-google-login';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate, useParams } from 'react-router-dom';
const cliendId="231097527136-dg59sifajv6b9qaidv3010e1bicqn4r7.apps.googleusercontent.com"
// Import the functions you need from the SDKs you need


const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-2CKkPkXVl2ILkzgZxJw3ACyW24GMja4",
  authDomain: "task-2ca5f.firebaseapp.com",
  projectId: "task-2ca5f",
  storageBucket: "task-2ca5f.appspot.com",
  messagingSenderId: "722519369223",
  appId: "1:722519369223:web:1cf8c8641013fd61bd6ca2",
  measurementId: "G-ESGM87L67P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); 
const analytics = getAnalytics(app);

export default function Login() {
const navigate=useNavigate();
const setAuth =useParams();
const [loading,setLoading]=useState(false);

  const signInWithGoogle=()=>{
    setLoading(true)
    
    console.log("Hello")
    // signInWithPopup(auth,provider);
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      localStorage.setItem("userInfo",JSON.stringify(user));
      // setLoading(false)
      // setAuth(localStorage.getItem("userInfo")?true:false);
      // <Navigate to="/" replace={true} />
      navigate("/")
    
      // ...
    }).catch((error) => {
      console.log(error)
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      setLoading(false)
    });
    // setLoading(false)
  }
  const signOutWithGoogle=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("SignOut")
      localStorage.removeItem("userInfo")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
useEffect(()=>{
  if(localStorage.getItem("userInfo")){
    // setLoading(false)
    navigate("/search")
  }
  
},[])
  return (
      <>
     
<button onClick={signInWithGoogle}>Login</button>
{
  loading?(<h1>Loading... Please Wait</h1>):(<></>)
}
{/* <button onClick={signOutWithGoogle}>LogOut</button> */}
      </>
 
  )
}
