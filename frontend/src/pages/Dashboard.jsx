import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <div>
          <h1 style={{fontFamily:'initial', textAlign:'center' ,paddingBottom:'20px', marginTop:'50px'}}>
            CONGRATULATIONS </h1>
     <h1  style={{fontFamily:'initial', textAlign:'center'}}>YOU ARE SUCCESSFULLY GET OTP</h1>
      <img style={{marginLeft:'500px', marginTop:'50px'}} src="https://static.vecteezy.com/system/resources/thumbnails/007/307/153/small/congratulations-graduates-class-of-2022-typography-black-text-isolated-white-background-illustration-of-a-graduating-class-of-2021-graphics-elements-for-t-shirts-and-the-idea-for-the-sign-vector.jpg" alt="" />
      
    </div>
  )
}

export default Dashboard