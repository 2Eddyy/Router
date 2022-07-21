import React from 'react'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate= useNavigate();
  return (
     
    <div>
        <h1>Mr.Eddy</h1>
        <p>S/O Maxime</p>
        <p>main road ,maiyanur(tk),kallakurichi(Dt),tamil Nadu</p><br/>
        <button onClick={()=>navigate('/Home')}>Go To Home</button>
  </div>
  )
}

export default Profile