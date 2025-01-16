import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Contact from './components/Contact'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />

      </Routes>
      <RightSideBar />

    </div>
  );
}

export default App;
