import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.confige'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from 'firebase/auth'



export const contextProvider= createContext(null)
const AppContext = ({children}) => {

const [user, setUser]=useState(null)
const [loading, setLoading]=useState(true)

const createNewUser=(email,password )=>{
  setLoading(true)
return createUserWithEmailAndPassword(auth, email, password)

}
const updateUser=({name, profile})=>{
  return updateProfile(auth.currentUser,{
    displayName: name,
    photoURL:profile
    
  })
}
const userLogOut=()=>{
  signOut(auth)
}
const userSignIn=(email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
const handelGoogle=(googleProvider)=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}



const [allbrand, setbrand]=useState([])
const brand = async () => {
    const response = await fetch('https://server-site-rho.vercel.app/brand').then(res => res.json())
    setbrand(response);
}
useEffect(() => {
    brand()
}, [])

const [products, setProduct]=useState([])
const productData = async()=>{
    const response = await fetch('https://server-site-rho.vercel.app/product').then(res=> res.json())
    setProduct(response);
}
useEffect(()=>{
    productData()
},[])

useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser)
    setLoading(false)
  })
  return ()=> {unSubscribe()}
},

[])

const contextInfo={user,loading,allbrand,products,  createNewUser,handelGoogle, userLogOut, userSignIn, updateUser}
  return (
    <contextProvider.Provider value={contextInfo}> 
        {children}
    </contextProvider.Provider>
  )
}
export default AppContext