import Header from "./components/Header/Header.jsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/about.jsx";
import Skills from "./components/Skills/skills.jsx";
import Experience from "./components/Experience/experience.jsx";
import Education from "./components/Education/education.jsx";
import Projects from "./components/Projects/project.jsx";
import Contact from "./components/Contact/contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Header/>} />
        <Route path="about" element={<About/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="Experience" element={<Experience/>} />
        <Route path="Education" element={<Education/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  </>
  )
}

export default App;
