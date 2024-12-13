
import React from 'react'
import globalImage from "../Images/global.jpg"
export default function Header() {
  return (
    <header>
            <img src={globalImage} alt="global" style={{width:"30px", height:"30px"}}></img> 
            <h1>my travel journal.</h1>
        </header>
  )
}
