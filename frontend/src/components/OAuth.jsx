import React from 'react'
import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth'
import {app} from '../firebase'

const OAuth = () => {
    const handleGoogleClick=async()=>{

try{
   const provider =new GoogleAuthProvider();
const auth=getAuth(app)
   const result=await signInWithPopup(auth,provider);

}catch(error){
    console.log("could not login with google",error);
}
    }
  return (
<>
<button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
    Continue with google 
</button>
    
</>
  )
}

export default OAuth

