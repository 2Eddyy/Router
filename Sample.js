import React from 'react'
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom'
import Home from './Home'
import Home1 from './Home1'
import Profile from './Profile'
import Sample1 from './Sample1'
export const Sample = () => {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/' style={({isActive})=>(isActive ? {color:'red'}:null)}>Home1</NavLink>
        </li>
        <li>
          <NavLink to='Profile'style={({isActive})=>(isActive ? {color:'red'}:null)} >Profile</NavLink>
        </li>
        <li>
          <NavLink to='Home'style={({isActive})=>(isActive ? {color:'red'}:null)} >Home</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='*' element={<di><h1>Not Found</h1></di>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
