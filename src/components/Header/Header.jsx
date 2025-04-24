import React from 'react'
import Heading from "./Heading.jsx";
import "./Header.css"
const Header = () => {
  return (
    <div>
      <header className='header'>
      <Heading/>
      </header>
      <footer className='Headerfooter'>
      <p>Created By @<span>Gursewak Singh</span> | All Rights Reserved!</p>
      </footer>
    </div>
  )
}

export default Header;
