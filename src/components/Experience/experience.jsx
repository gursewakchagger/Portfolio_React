import React from 'react'
import "./experience.css"
import { FaChalkboardUser,FaBriefcase,FaPlaneUp} from "react-icons/fa6";
const experience = () => {
  return (
    <div>
        <div className='Experience-heading'>
            
            <h1><FaBriefcase/>Work Experience</h1>
        </div>
        <div className='main'>
        <div className='first'>
        <div>
            <h1 className='firsth1'>WEB DEVELOPER</h1>
            <h1 className='secondh1'>Shri Kailash Digital Ventures (Capslock Digital) (Aug 2023 - Present)</h1>
            <p>As a web developer, I design and maintain web applications using HTML, CSS, Bootstrap, React.js, Laravel, MySQL, and Node.js. I ensure user interfaces are responsive and visually appealing, collaborate with teams to plan features, and deliver high‑quality solutions, refining my problem‑solving skills and contributing to project success in a fast‑paced environment.</p>
        </div>
        <div>
            <h1 className='firsth1'>Ninja Enterprenureship</h1>
            <h1 className='secondh1'>Coding Ninja</h1>
            <p>As an intern as a Ninja Enterprenureship,I'll work on various projects related to education technology and campus management.I'll collaborate with a team of experienced professionals, learn how to develop and implement solutions for education institutions, and gain hands-on experience with cutting-edge technologies. I also have the opportunity to work on research and development projects, participate in workshops and training sessions, and contribute to the growth and of the company. By the end of my internship, I'll have gained valuable skills and practical experience that will help me in my future career.</p>
        </div>
        </div>
        <div className= "vertical"> <FaPlaneUp style={{fontSize:"40px",position:"sticky",top:"200px",color:" #2857a4", margin:"-20px"}}/></div>
        <div className='second'>
        <div >
            <h1 className='firsth1'>React Js developer(Internship)</h1>
            <h1 className='secondh1'>Omninos Solution (Jan 2023 - July 2023)</h1>
            <p>During my React.js internship, I'll work on some projects and learn how to build interactive user interfaces using React. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of React.js development</p>
        </div>
        </div>
        </div>
        <footer className='Myfooter'>
      <p>Created By @<span>Gursewak Singh</span>|All Rights Reserved!</p>
      </footer>
    </div>
  )
}

export default experience