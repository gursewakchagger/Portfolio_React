import React from 'react';
import "./navbar.css"
import { Outlet, Link } from "react-router-dom";
const Home = () =>{
  const navbar=["Home","About","Skills","Experience","Education","Projects","Contact"];
  return (
    <div>
      <nav className='navbar'>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}
export default Home;
