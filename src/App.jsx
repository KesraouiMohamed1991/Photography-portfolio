import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
// import Footer from './Components/Footer'
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>

  );
}
