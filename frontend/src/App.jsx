import Nav from './components/UI/navigation/Nav.jsx';
import Footer from './components/UI/navigation/Footer.jsx'; // 1. Import the Footer

import './App.css';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Knowledge from './pages/Knowledge.jsx';
import Contact from './pages/Contact.jsx';

const App = () => (
  // 2. Added a flex wrapper so the footer stays at the bottom
  <div className="flex flex-col min-h-screen">
    <Nav />
    
    {/* 3. Added flex-grow so the page content pushes the footer down */}
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Knowledge' element={<Knowledge />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </main>

    {/* 4. Added the Footer */}
    <Footer />
  </div>
);

export default App;