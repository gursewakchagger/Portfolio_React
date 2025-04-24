import React from 'react'
import Img from "./fanhub.png"
import Img2 from "./Rove India.jpg"
import Img3 from "./nexusae0_2013-12-19-15.03.17.png"
import Img4 from "./Imdb movie.png"
import Img5 from "./Screenshot (66).png"
import Img6 from "./Screenshot (67).png"
import Img7 from "./Screenshot (68).png"
import Img8 from "./Screenshot (69).png"
import { FaTableList } from "react-icons/fa6";
import "./project.css"
const project = () => {
  const photo=[
    {
      title:"Activelink",
      decs:"Developed a User Platform Management System with a customizable admin panel using React.js, HTML, CSS, Bootstrap, and Laravel. Implemented user authentication, database management, API integration, chat, community features, dynamic pages, and customizable components, ensuring seamless frontend-backend integration for a scalable, user-friendly solution.",
      img:Img
    },
    {
      title:"Rove India",
      decs:"It is Trave-Website in this there is booking section , contact section ,and also some packages .",
      img:Img2
    },
    {
      title:"MOVIE-APP",
      decs:"It is a Movie App Website You can search movie and add to favourite list and can also store it  unfavourite.",
      img:Img3
    },
    {
      title:"IMDB Rating",
      decs:"In this you can search any movie and see all the detail of movies like release date , star cast , imbd rating and also add in favourite list.",
      img:Img4
    },
    {
      title:"TO-DO List",
      decs:"In this you can add any task , mark it as a complete , delete the task , edit the task.",
      img:Img5
    },
    {
      title:"Habit-Tracker",
      decs:"In this you can add any habit like exercise and track it all the week as the day pass you can mark it done, in progress, or not done.",
      img:Img6
    },
    {
      title:"Album List",
      decs:"It is Album list project , in this you can add your favourite album and also you can update it and delete it .",
      img:Img7
    },
    {
      title:"Ping-Pong",
      decs:"IT is Ping-pong game build using javaScrip. in which you can play the game easily with enjoyment.",
      img:Img8
    }

  ]
  return (
    <div>
      <section className=''>
      <h1 className='projectheading'><FaTableList/>Projects</h1>
      <div className='my-project'>
      {photo.map((Project)=><div className='project-div'><img src={Project.img} alt="" width={380} height={180} style={{width:"100%",height:"220px"}}></img>
      <div className='project-details'>
        <h1>{Project.title}</h1>
        <p>{Project.decs}</p>
        </div>
      </div>)}
      </div>
      </section>
      <footer className='Myfooter'>
      <p>Created By @<span>Gursewak Singh</span>|All Rights Reserved!</p>
      </footer>
    </div>
    
  )
}
export default project;