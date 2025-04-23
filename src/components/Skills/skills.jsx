import React from 'react'
import "./skills.css"
import { FaChalkboardUser,FaBriefcase } from "react-icons/fa6";
const skills = () => {
  return (
    <div className='main-skills'>
      <div className='skillheader'>
      <h1>
        <FaChalkboardUser/>
        Skills
      </h1>
      </div>
      <div className='Main-container'>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>Javascript</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>React</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>Redux</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>RestFul API</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>Nodejs</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>Laravel</span>
          </div>
        </div>
      </div>
      <div className='skill-progress'>
        <div className='skill-background' >
          <div className='skill-text'>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default skills;
