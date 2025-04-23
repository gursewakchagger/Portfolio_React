import React from 'react'
import { FaChalkboardUser,FaBriefcase,FaPlaneUp} from "react-icons/fa6";
const education = () => {
  return (
    <div>
        <div className='Experience-heading'>
            <h1><FaBriefcase/>Education</h1>
        </div>
        <div className='main'>
        <div className='first'>
        <div>
            <h1 className='firsth1'>Malout Institute Of Management And Information Technologies</h1>
            <h1 className='secondh1'>B.Tech-computer science and engieering</h1>
            <h1>Aug 2023 - Present</h1>
        </div>
        <div>
            <h1 className='firsth1'>C.A.V. Inter College</h1>
            <h1 className='secondh1'>Matriculate</h1>
            <h1>2014 - 2015</h1>
        </div>
        </div>
        <div className= "vertical"><FaPlaneUp style={{fontSize:"40px",position:"fixed",top:"200px",left:"613px",color:" #2857a4"}}/></div>
        <div className='second'>
        <div >
            <h1 className='firsth1'>C.A.V. Inter College</h1>
            <h1 className='secondh1'>Intermediate</h1>
            <h1>2016 - 2017</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default education;